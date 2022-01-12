import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import linksdata from '../data/linksdata.json'

const DesktopMenu = () => {
    return (
        <StyledWrapper>
            <NavItems>
                {
                    linksdata.map(linkdata => (
                        <li key={linkdata.id}>
                            <Link href={linkdata.path}>
                                <a >{linkdata.name}</a>
                            </Link>
                        </li>
                    ))
                }
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
                            <FontAwesomeIcon icon="user-circle"/>
                        </a>
                    </Link>
                </SignInButton>
            </AuthSection>
        </StyledWrapper>
    );
}
 
export default DesktopMenu;


const StyledWrapper = styled.div`
    display: none;

    @media(min-width: 1200px){
        display: block;
    }
`

const NavItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        list-style: none;
        margin-right: 0.8em;

        a{
            text-decoration: none;
            text-transform: capitalize;
            color: var(--white);
            font-size: 1.1em;
            font-weight: bold;
            text-align: center;
            transition: all 0.3s ease;
        }

        a:hover{
            color: var(--light-green);
        }
    }
`

const AuthSection = styled.div`
    /* display: flex; */
    display: none;
    align-items: center;
`

const CreateAccountBtn = styled.div`

    a{
        text-decoration: none;
        color: var(--white);
        font-size: 0.9em;
        padding: 10px;
        background: var(--light-green);
        border: 1px solid var(--light-green);
        text-align: center;
        border-radius: 2px;
        margin-right: 20px;
        transition: all .3s ease;

        :hover{
            background: transparent;
            color: var(--light-green);
        }
    }
`
const SignInButton = styled.div`
    text-align: center;

    a{
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.8em;
        transition: all 0.3s ease;

        :hover{
            color: var(--white);
        }
    }

`