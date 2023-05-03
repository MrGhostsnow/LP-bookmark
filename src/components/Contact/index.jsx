import {
    ContainerContact,
    Text,
    Title,
    SectionForm,
    Form,
    Button
} from './styles'

function Contact() {
    return (
        <ContainerContact>
            <Text>35,000+ ALREADY JOIN</Text>
            <Title>Stay up-to-date with what we're doing</Title>
            <SectionForm>
                <Form placeholder='Enter your email address' />
                <Button>Contact Us</Button>
            </SectionForm>
        </ContainerContact>
    )
}

export default Contact