import {
    ContainerFeatures,
    SectionText,
    Title,
    Subtitle,
    SectionOptions,
    Options,
    Option,
    SectionChoice,
    SectionImage,
    Bg,
    Bg1,
    Picture,
    SectionLabel,
    Button,
    SubtitleLabel


} from './styles'

import Tab1 from '../../assets/illustration-features-tab-1.svg'
import Tab2 from '../../assets/illustration-features-tab-2.svg'
import Tab3 from '../../assets/illustration-features-tab-3.svg'
import { useState } from 'react'

function Features() {

    const [showChoice1, setShowChoice1] = useState(true)
    const [showChoice2, setShowChoice2] = useState(false)
    const [showChoice3, setShowChoice3] = useState(false)


    const [showSelect1, setShowSelect1] = useState(true)
    const [showSelect2, setShowSelect2] = useState(false)
    const [showSelect3, setShowSelect3] = useState(false)

    const handleShowChoice1 = () => {
        setShowChoice1(true)
        setShowChoice2(false)
        setShowChoice3(false)
        setShowSelect1(true)
        setShowSelect2(false)
        setShowSelect3(false)
    }

    const handleShowChoice2 = () => {
        setShowChoice1(false)
        setShowChoice2(true)
        setShowChoice3(false)
        setShowSelect1(false)
        setShowSelect2(true)
        setShowSelect3(false)
    }

    const handleShowChoice3 = () => {
        setShowChoice1(false)
        setShowChoice2(false)
        setShowChoice3(true)
        setShowSelect1(false)
        setShowSelect2(false)
        setShowSelect3(true)
    }

    return (
        <ContainerFeatures>
            <SectionText>
                <Title>Features</Title>
                <Subtitle>Our aim is to make it quick and easy for you to access your
                    favorite websites. Your bookmarks sync between your devices
                    so you can access them on the go</Subtitle>
            </SectionText>
            <SectionOptions>
                <Options>
                    <Option onClick={() => handleShowChoice1()} className={showSelect1 ? 'select' : null}>Simple Bookmarking</Option>
                    <Option onClick={() => handleShowChoice2()} className={showSelect2 ? 'select' : null}>Speedy Searching</Option>
                    <Option onClick={() => handleShowChoice3()} className={showSelect3 ? 'select' : null}>Easy Sharing</Option>
                </Options>
            </SectionOptions>
            {showChoice1 && (
                <SectionChoice>
                    <SectionImage>
                        <Bg></Bg>
                        <Picture src={Tab1} alt='hero' />
                    </SectionImage>
                    <SectionLabel>
                        <Title>Bookmark in one click</Title>
                        <SubtitleLabel>Organize your bookmarks however you like. Our simple drag-and drop
                            interface gives you complete control over how you manage your favorite sites.
                        </SubtitleLabel>
                        <Button>More Info</Button>
                    </SectionLabel>
                </SectionChoice>
            )}
            {showChoice2 && (
                <SectionChoice>
                    <SectionImage>
                        <Bg1></Bg1>
                        <Picture src={Tab2} alt='hero' />
                    </SectionImage>
                    <SectionLabel>
                        <Title>Intelligent search</Title>
                        <SubtitleLabel>
                            Our powerful search feature will help you fins saved
                            sites in no time at all. No need to trawl through all of you bookmarks.
                        </SubtitleLabel>
                        <Button>More Info</Button>
                    </SectionLabel>
                </SectionChoice>
            )}
            {showChoice3 && (
                <SectionChoice>
                    <SectionImage>
                        <Bg1></Bg1>
                        <Picture src={Tab3} alt='hero' />
                    </SectionImage>
                    <SectionLabel>
                        <Title>Share your bookmarks</Title>
                        <SubtitleLabel>
                            Easily share your bookmarks and collections with others. Create a shareable link
                            that you can send at the click os a button.
                        </SubtitleLabel>
                        <Button>More Info</Button>
                    </SectionLabel>
                </SectionChoice>
            )}

        </ContainerFeatures>
    )
}

export default Features