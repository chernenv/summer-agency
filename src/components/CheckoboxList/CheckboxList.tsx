import React, {ReactNode} from "react";
import Checkbox from "../Checkbox/Checkbox";
import {StyledCheckboxList} from "./styled-components";

interface CheckboxListProps {
    items: {
        id: string;
        label: ReactNode;
    }[];
    value: string[];
    onChange: (v: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({items, value, onChange}) => {

    const handleChange = (checked: boolean, id: string): void => {
        console.log('CheckboxList handleChange');
        const values = checked ? [...value, id] : value.filter(v => v !== id);
        onChange(values);
    }

    return <StyledCheckboxList>
        {items.map(item => {
            return <Checkbox
                key={item.id}
                label={item.label}
                value={value.includes(item.id)}
                onChange={(checked) => handleChange(checked, item.id)}
            />
        })}
    </StyledCheckboxList>;
};

export default CheckboxList;
