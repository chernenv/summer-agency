import React from 'react';
import {ProgressBarContainer, Progress, LoadingContainer, LoadingText} from "./styled-components";


const ProgressBar = () => {
    return (
        <LoadingContainer>
            <LoadingText>We are gathering available privacy settings...</LoadingText>
            <ProgressBarContainer>
                <Progress />
            </ProgressBarContainer>
        </LoadingContainer>
    );
};

export default ProgressBar;