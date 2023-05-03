import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;

    @media screen and (max-width: 1024px){
        flex-direction: column-reverse;
        height: 800px;
        align-items: center;
    }
    
`;

export const SectionText = styled.div`
    width: 50%;
    height: 400px;
    margin-left: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1024px){
        margin-left: 0rem;
    }

    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const Title = styled.h1`
    width: 500px;
    font-size: 46px;
    color: hsl(229, 31%, 21%);

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const Subtitle = styled.p`
    width: 500px;
    font-size: 20px;
    color: hsl(229, 8%, 60%);
    margin-top: -1rem;

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const SectionBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;

    @media screen and (max-width: 1024px){
        width: 100%;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }
`;

export const Btn = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 6px;
    border: none;

    &.primary{
        background-color: hsl(231, 69%, 60%);
        color: #fff;
    }

    &.{
        background-color: hsl(229, 8%, 60%);
        color: hsl(229, 31%, 21%);
    }
`;

export const SectionImage = styled.div``;

export const Picture = styled.img`
    position: absolute;
    right: 7rem;
    top: 8rem;

    @media screen and (max-width: 1024px){
        right: 11.5rem;
    }

    @media screen and (max-width: 768px){
        right: 2.5rem;
    }

    @media screen and (max-width: 542px){
        width: 400px;
        right: 0.5rem;
    }
`;

export const Bg = styled.div`
    position: relative;
    left: 12.5rem;
    top: 18rem;
    width: 550px;
    height: 220px;
    color: blue;
    background-color: #5368DF;
    border-radius: 80px 0 0 100px;

    @media screen and (max-width: 1440px){
        left: 0.5rem;
    }

    @media screen and (max-width: 1024px){
        display: none;
    }
`

