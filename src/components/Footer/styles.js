import styled from "styled-components";


export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:hsl(229, 31%, 21%);

    @media screen and (max-width: 542px){
        flex-direction: column;
        height: 300px;
    }
`;

export const SectionBtns = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12rem;

    @media screen and (max-width: 1024px){
        margin-left: 6rem;
    }

    @media screen and (max-width: 542px){
        flex-direction: column;
        justify-content: center;
        margin-left: 0rem;
        margin-top: 2rem;
    }
`

export const ListBtns = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 500px;

    @media screen and (max-width: 1024px){
        width: 300px;
    }

    @media screen and (max-width: 542px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
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
    color: #fff;
    font-weight: 700;
`

export const SectionIcons = styled.div`
    margin-right: 8rem;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 542px){
        margin-right: 0rem;
    }
`;

export const Facebook = styled.img``;
export const Twitter = styled.img``;