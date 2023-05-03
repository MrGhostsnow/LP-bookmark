import {
    ContainerHeader,
    SectionText,
    Title,
    Subtitle,
    SectionBtns,
    Btn,
    SectionImage,
    Picture,
    Bg

} from './styles'
import hero from '../../assets/illustration-hero.svg'

function Header() {
    return (
        <ContainerHeader>
            <SectionText>
                <Title>A Simple Bookmark Manager</Title>
                <Subtitle>A clean and simple interface to organize your favorite website. Open a new browser tab and see your sites load instantly. Try it for free.</Subtitle>
                <SectionBtns>
                    <Btn className='primary'>Get it on Chrome</Btn>
                    <Btn className='secondary'>Get it on Firefox</Btn>
                </SectionBtns>
            </SectionText>
            <SectionImage>
                <Bg></Bg>
                <Picture src={hero} alt='hero' />
            </SectionImage>
        </ContainerHeader>
    )
}

export default Header