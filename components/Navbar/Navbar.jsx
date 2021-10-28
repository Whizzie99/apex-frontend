import Link from 'next/link'
import Image from 'next/image'
// import {PersonFillIcon} from '@primer/octicons-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Container from '../Container/Container';

import { Wrapper, Nav, Logo, NavListSection, NavItems, AuthSection, CreateAccountBtn, SignInButton } from './styles';

import logo from '../../public/images/logo.png'



const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <Nav>
                    <Logo>
                        <Image src={logo} alt="logo" layout="fill" placeholder="blur" objectFit="contain" />
                    </Logo>
                    <NavListSection>
                        <NavItems>
                            <li>
                                <Link href="#">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Markets</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Company</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Education</a>
                                </Link>
                            </li>
                        </NavItems>
                        <AuthSection>
                            <CreateAccountBtn>
                                <Link href="#">
                                    <a>Create Account</a>
                                </Link>
                            </CreateAccountBtn>
                            <SignInButton>
                                <Link href="#">
                                    <a>
                                        <FontAwesomeIcon icon="user"/>
                                    </a>
                                </Link>
                            </SignInButton>
                        </AuthSection>
                    </NavListSection>
                </Nav>
            </Container>
        </Wrapper>
    );
}
 
export default Navbar;