export interface Company {
    id: number;
    uuid: number;
    name: string;
    group: number;
    description: string;
    departments: {
        label: string;
        code: string;
        required: boolean;
    }[];
}

