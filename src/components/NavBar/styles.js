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
    font-weight: 700;

    &.login{
        color: #fff;
        background-color: hsl(0, 94%, 66%);
    }
`

export const SectionNavBarMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin-top: 0.5rem;
`;


export const SectionBtnsMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnMobile = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    height: 45px;
    width: 305px;
    border-radius: 6px;
    color: #fff;
    border-bottom: 1px solid #fff;
    border-radius: 0;
    font-weight: 500;
    font-size: 16px;

    &.first{
        border-top: 1px solid #fff;
    }

    &.login{
        color: #fff;
        border: 1px solid #fff;
        border-radius: 6px;
        margin-top: 1rem;
    }
`;

export const ListBtnsMobile = styled.ul`
    padding: 0;
`;

export const Overlay = styled.div`
position: fixed; 
display: flex; 
flex-direction: column;
width: 100%; 
height: 100%; 
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(37,43,70,0.9); 
z-index: 2; 
cursor: pointer; 
`;

export const SectionIconsMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin-top: 3rem;
`;