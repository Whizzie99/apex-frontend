import Image from 'next/image'
import useMatchMedia from '../../Hooks/useMatchMedia'
import Container from '../Container/Container';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';

import { Wrapper, Nav, Logo, NavListSection} from './styles';

import logo from '../../public/images/logo.png'



const Navbar = () => {

    const isDesktopScreen = useMatchMedia('(min-width: 1200px)', true)
    const isMobileScreen = useMatchMedia('(max-width: 1199.99px)', true)

    return (
        <Wrapper>
            <Container>
                <Nav>
                    <Logo>
                        <Image src={logo} alt="logo" layout="fill" placeholder="blur" objectFit="contain" />
                    </Logo>
                    <NavListSection>
                        {isDesktopScreen && <DesktopMenu/>}
                        {isMobileScreen && <MobileMenu/>}
                    </NavListSection>
                </Nav>
            </Container>
        </Wrapper>
    );
}
 
export default Navbar;