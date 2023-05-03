import styled from "styled-components";

export const ContainerNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50rem;

    @media screen and (max-width: 1440px){
        gap: 22rem;
    }

    @media screen and (max-width: 1024px){
        gap: 12rem;
    }

    @media screen and (max-width: 768px){
        gap: 2rem;
    }

    @media screen and (max-width: 542px){
        display: none;
    }
`

export const SectionBtns = styled.div`
    display: flex;
`

export const ListBtns = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 500px;
`

export const Btn = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    height: 35px;
    width: 85px;
    border-radius: 6px;

    &.login{
        color: #fff;
        background-color: hsl(0, 94%, 66%);
    }
`