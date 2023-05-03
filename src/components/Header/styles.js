import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
`;

export const SectionText = styled.div`
    width: 50%;
    height: 400px;
    margin-left: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

export const Title = styled.h1`
    width: 500px;
    font-size: 46px;
    color: hsl(229, 31%, 21%);
`;

export const Subtitle = styled.p`
    width: 500px;
    font-size: 20px;
    color: hsl(229, 8%, 60%);
    margin-top: -1rem;
`;

export const SectionBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
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
`