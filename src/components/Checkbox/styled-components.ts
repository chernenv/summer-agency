import styled from "styled-components";

export const StyledSVG = styled.svg`
    margin-right: 5px;
`;

export const StyledCircle = styled.path`
    fill: #CED0D9;
`;

export const StyledCheckmark = styled.path`
    fill: #FF4A55;
`;

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 5px 0;
    
    &:active {
        svg {
            box-shadow: -1px 0px 0px 2px #282828;
            background-color: #282828;
            border-radius: 4px;
            
            ${StyledCircle}, ${StyledCheckmark} {
                fill: #FFFFFF;
            }
        }
    }
    
    &:focus {
            svg {
            box-shadow: -1px 0px 0px 2px #E6E6E6;
            background-color: #E6E6E6;
            border-radius: 4px;
            ${StyledCircle}, ${StyledCheckmark} {
                fill: #FF4A55;
            }
        }
    }
    
    &:hover {
        ${StyledCircle} {
            fill: #FF4A55;
        }
    }
`;

export const StyledSpan = styled.span`
    font-weight: 400;
    line-height: 19px;
`;
