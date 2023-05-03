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
    height: 350px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 6px;
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