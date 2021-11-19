import styled from 'styled-components'

export const Wrapper = styled.div`
    background: var(--black-2);
    padding: 0.9em;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

export const Logo = styled.div`
    position: relative;
    width: 120px;
    height: 40px;

    img{
        top: 0;
    }
`

export const NavListSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex: 0.8; */
`