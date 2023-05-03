import {
    ContainerDownload,
    SectionText,
    Title,
    Subtitle,
    SectionCard,
    Card,
    Picture,
    TitleCard,
    SubtitleCard,
    Button
} from './styles'

import Chrome from '../../assets/logo-chrome.svg'
import Firefox from '../../assets/logo-firefox.svg'
import Opera from '../../assets/logo-opera.svg'
import Dots from '../../assets/bg-dots.svg'

function Download() {
    return (
        <ContainerDownload>
            <SectionText>
                <Title>Download the extension</Title>
                <Subtitle>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize</Subtitle>
            </SectionText>
            <SectionCard>
                <Card className='chrome'>
                    <Picture src={Chrome} width={75} />
                    <TitleCard>Add to Chrome</TitleCard>
                    <SubtitleCard>Minimum version 62</SubtitleCard>
                    <img src={Dots} alt='' />
                    <Button>Add & Install Extension</Button>
                </Card>
                <Card className='firefox'>
                    <Picture src={Firefox} width={75} />
                    <TitleCard>Add to Firefox</TitleCard>
                    <SubtitleCard>Minimum version 55</SubtitleCard>
                    <img src={Dots} alt='' />
                    <Button>Add & Install Extension</Button>
                </Card>
                <Card className='opera'>
                    <Picture src={Opera} width={75} />
                    <TitleCard>Add to Opera</TitleCard>
                    <SubtitleCard>Minimum version 46</SubtitleCard>
                    <img src={Dots} alt='' />
                    <Button>Add & Install Extension</Button>
                </Card>
            </SectionCard>
        </ContainerDownload>
    )
}

export default Download