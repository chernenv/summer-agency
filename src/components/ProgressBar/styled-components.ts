import styled, {keyframes} from "styled-components";

export const ProgressBarContainer = styled.div`
    background-color: #E5E5E5;
    border-radius: .5rem;
    width: 400px;
    margin-top: 1rem;
    
    @media (max-width: 768px) { width: 250px; }
`;

const WidthAnimationNormal = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 400px;
    }
`;

const WidthAnimationSmall = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 250px;
    }
`;

export const Progress = styled.div`
     background-color: #FF4A55;
     height: 4px;
     border-radius: 1rem;
     animation: ${WidthAnimationNormal} 3s linear infinite;
       
     @media (max-width: 900px) { 
        animation: ${WidthAnimationSmall} 3s linear infinite;
     }
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    margin: auto;
`;

export const LoadingText = styled.span`
    font-weight: 400;
`;