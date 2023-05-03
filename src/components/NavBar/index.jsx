import {
    ContainerNav,
    SectionBtns,
    ListBtns,
    Btn,
    SectionNavBarMobile,
    SectionBtnsMobile,
    BtnMobile,
    ListBtnsMobile,
    Overlay,
    SectionIconsMobile
} from './styles'

import logo from '../../assets/logo-bookmark.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'
import { useEffect, useState } from 'react';

function NavBar() {

    const [width, setWidth] = useState(window.innerWidth);
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const mobile = (width <= 542);

    const handleclick = () => {
        setShowDropDown(prev => !prev)
    }


    return (
        <ContainerNav>
            {!mobile ? (
                <>
                    <img src={logo} alt='logo' height={25} />
                    <SectionBtns>
                        <ListBtns>
                            <Btn>FEATURES</Btn>
                            <Btn>PRICING</Btn>
                            <Btn>CONTACT</Btn>
                            <Btn className='login'>LOGIN</Btn>
                        </ListBtns>
                    </SectionBtns>
                </>
            ) : (
                <SectionNavBarMobile>
                    {!showDropDown && (
                        <>
                            <img src={logo} alt='logo' height={25} />
                            <img src={hamburger} alt='logo' height={20} onClick={handleclick} />
                        </>
                    )}
                    {showDropDown && (
                        <Overlay>
                            <SectionIconsMobile>
                                <img src={logo} alt='logo' height={25} />
                                <img onClick={handleclick} src={close} alt='logo' height={20} />
                            </SectionIconsMobile>
                            <SectionBtnsMobile>
                                <ListBtnsMobile>
                                    <BtnMobile className='first'>FEATURES</BtnMobile>
                                    <BtnMobile>PRICING</BtnMobile>
                                    <BtnMobile>CONTACT</BtnMobile>
                                    <BtnMobile className='login'>LOGIN</BtnMobile>
                                </ListBtnsMobile>
                            </SectionBtnsMobile>
                        </Overlay>
                    )}
                </SectionNavBarMobile>
            )}
        </ContainerNav>
    )
}

export default NavBar