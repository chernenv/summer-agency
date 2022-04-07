import React, {ReactNode} from "react";
import {StyledLabel, StyledSpan} from "./styled-components";
import CheckboxSVG from "./CheckboxSVG/CheckboxSVG";

interface CheckboxProps {
    value: boolean;
    onChange: (v: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
    label: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({value, onChange, label}) => {
    return (
        <StyledLabel>
            <CheckboxSVG checked={value}/>
            <input id={label as string} hidden={true} type="checkbox" checked={value}
                   onChange={(event) => onChange(event.target.checked)}/>
            <StyledSpan>{label}</StyledSpan>
        </StyledLabel>
    )
};


export default Checkbox;


