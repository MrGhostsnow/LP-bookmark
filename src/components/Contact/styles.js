import styled from "styled-components";


export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    background-color: #5368DF;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #fff;
`;

export const Title = styled.h1`
    font-size: 34px;
    width: 380px;
    color: #fff;
    text-align: center;
`;

export const SectionForm = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Form = styled.input`
    width: 250px;
    height: 35px;
    border-radius: 6px;
    border: none;
`;

export const Button = styled.button`
    border-radius: 6px;
    border: none;
    background-color: hsl(0, 94%, 66%);
    color: #fff;
    width: 100px;
`;