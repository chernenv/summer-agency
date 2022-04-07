import React, {useCallback, useEffect, useState} from "react";
import CheckboxList from "./components/CheckoboxList/CheckboxList";
import 'overlayscrollbars/css/OverlayScrollbars.css';
import {Company} from "./models/Company";
import {
    Container,
    ListHeader,
    ListOverlayScrollbarsComponent,
    CardOverlayScrollbars,
    Card,
    CardFooter,
    CardTitle
} from "./styled-components";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import {getLocalStorageItem, setLocalStorageItem} from "./utils/localStorageUtils";

interface MappedCompany {
    id: number;
    uuid: number;
    name: string;
    group: number;
    description: string;
    departments: {
        id: string;
        label: string;
    }[];
}


const App = () => {
    const localSelectedDepartments: string[] = JSON.parse(getLocalStorageItem('selectedDepartments')) || [];
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const [selectedDepartments, setSelectedDepartments] = useState<string[]>(localSelectedDepartments);
    const [companies, setCompanies] = useState<MappedCompany[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [allChecked, setAllChecked] = useState<boolean>(false);

    const fetchCompanies = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/companies');

        if (!response.ok) {
            setError(`Something went wrong, error status: ${response.status}`)
            throw new Error('Something went wrong!');
        }
        setError(null);

        await delay(3000);
        const companies: Company[] = await response.json();
        const selectedDepartments: string[] = getSelectedDepartments(companies);
        const mappedCompanies: MappedCompany[] = mapCompaniesDtoToCompaniesProps(companies);

        setCompanies(mappedCompanies);

        if (!selectedDepartments) {
            setLocalStorageItem('selectedDepartments', JSON.stringify(selectedDepartments))
            setSelectedDepartments(selectedDepartments);
        }

        if (localSelectedDepartments.length === getDepartments(mappedCompanies).length) {
            setAllChecked(true);
        }

        setIsLoading(false);
    }, []);

    const getSelectedDepartments = (companies: Company[]): string[] => {
        return companies.flatMap(company => company.departments)
            .filter(department => department.required)
            .map(department => department.code);
    }

    const getDepartments = (companies: MappedCompany[]): string[] => {
        return companies.flatMap(company => company.departments).map(department => department.id);
    }

    const mapCompaniesDtoToCompaniesProps = (companies: Company[]): MappedCompany[] => {
        return companies.map(company => {
            const mappedDepartments = company.departments.map(department => ({
                id: department.code,
                label: department.label
            }))
            return {...company, departments: mappedDepartments}
        });
    }

    const handleChangeAll = (checked: boolean): void => {
        setAllChecked(checked);
        if (checked) {
            const allDepartments = getDepartments(companies);
            setSelectedDepartments(allDepartments);
        } else {
            setSelectedDepartments([]);
        }
    }

    const handleChange = (value: string[]): void => {
        setSelectedDepartments(value);
        value.length === getDepartments(companies).length ? setAllChecked(true) : setAllChecked(false);
    }

    const onConfirmClick = (): void => {
        setLocalStorageItem('selectedDepartments', JSON.stringify(selectedDepartments));
    }

    useEffect(() => {
        fetchCompanies();
    }, [fetchCompanies]);

    return (
        <Container>
            {error && <p>{error}</p>}
            <Card>
                <CardTitle>Hey, take a moment to adjust your privacy settings</CardTitle>
                {isLoading && <ProgressBar/>}
                {companies.length === 0 && !isLoading && <span>No companies to display</span>}
                {companies.length > 0 && !isLoading &&
                    <>
                        <CardOverlayScrollbars options={{
                            sizeAutoCapable: false,
                            scrollbars: {
                                clickScrolling: true
                            }
                        }}>
                            {companies.map(company =>
                                <ListOverlayScrollbarsComponent
                                    key={company.id}
                                    options={{
                                        sizeAutoCapable: false,
                                        scrollbars: {
                                            clickScrolling: true
                                        }
                                    }}>
                                    <ListHeader>{company.name}</ListHeader>

                                    <CheckboxList onChange={handleChange} items={company.departments}
                                                  value={selectedDepartments}/>
                                </ListOverlayScrollbarsComponent>
                            )}
                        </CardOverlayScrollbars>
                        <CardFooter>
                            <Checkbox
                                label={'Select all'}
                                value={allChecked}
                                onChange={(checked) => handleChangeAll(checked)}
                            />
                            <Button onClick={onConfirmClick} text={'Confirm'}></Button>
                        </CardFooter>
                    </>
                }
            </Card>
        </Container>
    );
}

export default App;
