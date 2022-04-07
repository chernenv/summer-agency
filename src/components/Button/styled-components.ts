import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center
    width: 7rem;
    height: 2rem;
    align-items: center;
    border-radius: 2rem;
    
    border: none;
    padding: 1rem 2rem;
    text-decoration: none;
    background: #FF4A55;
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background, color 250ms ease-in-out, 
                transform 150ms ease;

    &:hover {
        background: #FF858C;
    }
    &:focus {
        background: #E5E5E5;
        color: #282828
    }
    &:active{
        background:#282828;
        color: #FFFFFF
    }
`;