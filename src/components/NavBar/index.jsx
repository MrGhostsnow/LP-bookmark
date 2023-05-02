import {
    ContainerNav,
    SectionBtns,
    ListBtns,
    Btn
} from './styles'

import logo from '../../assets/logo-bookmark.svg'

function NavBar() {
    return (
        <ContainerNav>
            <img src={logo} alt='logo' height={25} />
            <SectionBtns>
                <ListBtns>
                    <Btn>FEATURES</Btn>
                    <Btn>PRICING</Btn>
                    <Btn>CONTACT</Btn>
                    <Btn className='login'>LOGIN</Btn>
                </ListBtns>
            </SectionBtns>
        </ContainerNav>
    )
}

export default NavBar