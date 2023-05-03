import {
    ContainerFooter,
    SectionBtns,
    ListBtns,
    Btn,
    SectionIcons,
    Facebook,
    Twitter
} from './styles'

import logo from '../../assets/logo-bookmark.svg'
import Facebookicon from '../../assets/icon-facebook.svg'
import Twittericon from '../../assets/icon-twitter.svg'

function Footer() {
    return (
        <ContainerFooter>
            <SectionBtns>
                <img src={logo} alt='logo' height={25} />
                <ListBtns>
                    <Btn>FEATURES</Btn>
                    <Btn>PRICING</Btn>
                    <Btn>CONTACT</Btn>
                </ListBtns>
            </SectionBtns>
            <SectionIcons>
                <Facebook src={Facebookicon} />
                <Twitter src={Twittericon} />
            </SectionIcons>
        </ContainerFooter>
    )
}

export default Footer