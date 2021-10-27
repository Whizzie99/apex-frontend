import styled from 'styled-components'

export const Wrapper = styled.div`
    background: var(--black-2);
    padding: 0.9em;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    position: relative;
    width: 120px;

    img{
        top: 0;
    }
`

export const NavListSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.8;
`

export const NavItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        list-style: none;
        margin-right: 0.8em;

        a{
            text-decoration: none;
            color: var(--white);
            text-align: center;
        }
    }
`

export const AuthSection = styled.div`
    display: flex;
    align-items: center;
`

export const CreateAccountBtn = styled.div`

    a{
        text-decoration: none;
        color: var(--white);
        font-size: 0.9em;
        padding: 10px;
        background: var(--light-green);
        border: 1px solid var(--light-green);
        text-align: center;
        border-radius: 2px;
        margin-right: 30px;
        transition: all .3s ease;

        :hover{
            background: transparent;
            color: var(--light-green);
        }
    }
`

export const SignInButton = styled.div`
    background: var(--black-3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;

    a{
        color: var(--white);
        padding: 8px;
        padding-bottom: 12px;
    }
`