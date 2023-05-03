import styled from "styled-components";


export const ContainerDownload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 55%;
    text-align: center;
    font-size: 18px;
    color: hsl(229, 8%, 60%);
`;

export const SectionCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 500px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 330px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 6px;

    &.chrome{
        margin-top: -5rem;
    }

    &.firefox{
        margin-top: -3rem;
    }

    &.opera{
        margin-top: -1rem;
    }
`;

export const Picture = styled.img``;

export const TitleCard = styled.p`
    font-size: 22px;
    color: hsl(229, 31%, 21%);
`;

export const SubtitleCard = styled.p`
    text-align: center;
    font-size: 16px;
    color: hsl(229, 8%, 60%);
`;

export const Button = styled.button`
    margin-top: 1rem;
    height: 30px;
    border: none;
    background-color: #5368DF;
    border-radius: 6px;
    color: #fff;
`;