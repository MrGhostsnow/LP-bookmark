import styled from "styled-components";



export const ContainerFeatures = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    height: 800px;
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
`;

export const SectionImage = styled.div`
    width: 50%
`;

export const Picture = styled.img`
    position: absolute;
    top: 60rem;
    left: 16rem;    
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
`

export const SectionLabel = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%
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
    margin-top: -0.2rem
`