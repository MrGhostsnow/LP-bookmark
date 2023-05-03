import styled from "styled-components";

export const ContainerFAQ = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    height: 700px;
`;

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 28px;
    color: hsl(229, 31%, 21%);
`;

export const Subtitle = styled.p`
    width: 50%;
    text-align: center;
    font-size: 18px;
    color: hsl(229, 8%, 60%);

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const SectionFAQ = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Faq = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 430px;
    border-bottom: 1px solid hsl(229, 8%, 60%);

    &.first{
        border-top: 1px solid hsl(229, 8%, 60%);
    }

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const Text = styled.p`
font-size: 18px;
`;

export const Arrow = styled.img``;

export const Button = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    background-color: #5368DF;
    border-radius: 6px;
    color: #fff;
`;