import {
    ContainerFAQ,
    SectionText,
    Title,
    Subtitle,
    SectionFAQ,
    Faq,
    Text,
    Arrow,
    Button
} from './styles'

import Arrowicon from '../../assets/icon-arrow.svg'

function FAQ() {
    return (
        <ContainerFAQ>
            <SectionText>
                <Title>Frequently Asked Questions</Title>
                <Subtitle>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                </Subtitle>
            </SectionText>
            <SectionFAQ>
                <Faq className='first'>
                    <Text>
                        What is Bookmark?
                    </Text>
                    <Arrow src={Arrowicon} />
                </Faq>
                <Faq>
                    <Text>
                        How can I request a new browser?
                    </Text>
                    <Arrow src={Arrowicon} />
                </Faq>
                <Faq>
                    <Text>
                        Is there a mobile app?
                    </Text>
                    <Arrow src={Arrowicon} />
                </Faq>
                <Faq>
                    <Text>
                        What about other Chromium browsers?
                    </Text>
                    <Arrow src={Arrowicon} />
                </Faq>
            </SectionFAQ>
            <Button>More Info</Button>
        </ContainerFAQ>
    )
}

export default FAQ