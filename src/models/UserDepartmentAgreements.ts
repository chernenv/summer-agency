export interface UserDepartmentAgreements {
    usrId: number;
    departments: {
        departmentCode: string;
        processingAllowed: boolean;
    }[];
}