import styled from "styled-components";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

export const ListOverlayScrollbarsComponent = styled(OverlayScrollbarsComponent)`
    display: flex;
    max-width: 14rem;
    height: 8rem;
    margin: 1rem auto;
    background: #FFFFFF;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    
    & > .os-scrollbar-vertical {
        top: 2.5rem !important;
        height: 60%;
        right: 0.25rem;
        width: 0.5rem;
    }
    
    @media (max-width: 1440px) { max-width: 26rem; }
    @media (max-width: 1200px) { max-width: 22rem; }
    @media (max-width: 768px) { max-width: 18rem; }
    @media (max-width: 576px) { max-width: 16rem; }
`

export const CardOverlayScrollbars = styled(OverlayScrollbarsComponent)`
    height: 100%;
    background: #F5F5F5;
    
    & > .os-scrollbar-vertical {
        background: rgba(255,0,0,0.3);
        border-radius: 0.5rem;
        top: 0.5rem !important;
        right: 0.5rem;
        height: 95%;
        width: 0.25rem;
        padding: 0;
    }

    & .os-scrollbar-handle {
    background: #FF4A55 !important;
}
`

export const ListHeader = styled.span`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    padding: 0.5rem 1rem;
    background: #FF4A55;
    color: #FFFFFF;
    border-bottom: 1px solid rgba(0,0,0,.125);
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 23px;
    
    @media (max-width: 768px) { font-size: 1rem }
`;

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const Card = styled.div`
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 34.5rem;
                    min-width: 21rem;
                    border-radius: 8px;
                    background: #FFFFFF;
                    box-shadow: -10px 0px 16px rgba(0, 0, 0, 0.05);
                    `;

export const CardTitle = styled.h1`
                    text-align: center;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 2rem;
                    padding: 0 2rem;
                    text-align: start;
                    line-height: 38px;
                    color: #282828;
                    
                    @media (max-width: 768px) { font-size: 1.5rem }
                    `;

export const CardFooter = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 2rem 0;
`;
