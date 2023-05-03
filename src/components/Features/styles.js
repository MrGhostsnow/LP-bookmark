import styled from "styled-components";

export const ContainerFeatures = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    height: 800px;

    @media screen and (max-width: 542px){
        height: 1200px;
    }
`

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 28px;
    color: hsl(229, 31%, 21%);
`

export const Subtitle = styled.p`
    width: 40%;
    text-align: center;
    font-size: 18px;
    color: hsl(229, 8%, 60%);

    @media screen and (max-width: 542px){
        width: 70%;
    }
`;

export const SectionOptions = styled.div`
    display: flex;
`;

export const Options = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 600px;

    @media screen and (max-width: 542px){
        flex-direction: column;
        gap: 1.5rem;
        width: 300px;
        justify-content: center;
        padding: 0;
    }
`;


export const Option = styled.li`
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 150px;
    cursor: pointer;

    &.select{
        border-bottom: 3px solid hsl(0, 94%, 66%);
        width: 150px;
    }
`;

export const SectionChoice = styled.div`
    display: flex;
    align-items: center;
    height: 400px;

    @media screen and (max-width: 768px){
        width: 750px;
    }

    @media screen and (max-width: 542px){
        flex-direction: column;
        width: 400px;
    }
`;

export const SectionImage = styled.div`
    width: 50%
`;

export const Picture = styled.img`
    position: absolute;
    top: 60rem;
    left: 16rem;    

    @media screen and (max-width: 1024px){
        top: 90rem;
        left: 8rem; 
        width: 400px;
    }

    @media screen and (max-width: 768px){
        width: 350px;
        left: 6rem; 
    }

    @media screen and (max-width: 542px){
        width: 320px;
        left: 4rem; 
        top: 90rem;
    }
`;

export const Bg = styled.div`
    position: relative;
    top: 5rem;
    left: -6rem;
    width: 550px;
    height: 310px;
    color: blue;
    background-color: #5368DF;
    border-radius: 0px 80px 100px 0px;

    @media screen and (max-width: 768px){
        width: 500px;
        height: 280px;
    }

    @media screen and (max-width: 542px){
        width: 420px;
        height: 200px;
        left: -7rem;
    }
`

export const Bg1 = styled.div`
    position: relative;
    top: 5rem;
    left: -11rem;
    width: 590px;
    height: 310px;
    color: blue;
    background-color: #5368DF;
    border-radius: 0px 80px 100px 0px;

    @media screen and (max-width: 542px){
        width: 420px;
        height: 200px;
    }
`

export const SectionLabel = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;

    @media screen and (max-width: 1024px){
        margin-left: 4rem;
    }

    @media screen and (max-width: 768px){
        margin-left: 6rem;
        width: 35%;
    }

    @media screen and (max-width: 542px){
        margin-top: 12rem;
        text-align: center;
        align-items: center;
        margin-left: 0rem;
    }
`;

export const Button = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    background-color: #5368DF;
    border-radius: 6px;
    color: #fff;
`;

export const SubtitleLabel = styled.p`
    width: 50%;
    font-size: 18px;
    color: hsl(229, 8%, 60%);
    margin-top: -0.2rem;

    @media screen and (max-width: 768px){
        width: 60%;
    }

    @media screen and (max-width: 542px){
        width: 300px;
    }
`