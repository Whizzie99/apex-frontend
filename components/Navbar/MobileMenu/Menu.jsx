import styled from "styled-components";
import Link from "next/link";
import linksdata from '../data/linksdata.json'


const Menu = ({open,setOpen, ...props}) => {

    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            {
                linksdata.map(linkdata => (
                    <Link key={linkdata.id} href={linkdata.path}>
                        <a onClick={() => setOpen(!open)}>{linkdata.name}</a>
                    </Link>
                ))
            }
        </StyledMenu>
    );
}
 
export default Menu;

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--black-2);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 5;

    @media (max-width: 1199.99px) {
        width: 100%;
    }

    a {
        font-family: var(--font-stack-2);
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 1199.99px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: var(--light-green);
        }
    }
`