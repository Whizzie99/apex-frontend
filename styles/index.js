import styled from 'styled-components'

export const Hero = styled.div`
    background: var(--black-2);
    height: 100vh;
    width: 100%;
`

export const HeroContent = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
`

export const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0 50px;
`

export const Content = styled.div`

    h1{
        font-size: 3em;
        font-weight: bold;
        text-transform: capitalize;
        color: var(--white);
    }

    p{
        margin: 10px 0;
        margin-bottom: 30px;
        font-size: 1.2em;
        color: var(--white);
    }

    a{
        padding: 10px;
        text-decoration: none;
        border: 2px solid var(--light-green);
        color: var(--light-green);
        text-transform: capitalize;
        margin: 30px 0;
        transition: all .3s ease;
    }

    a:hover{
        background: var(--light-green);
        color: var(--white);
    }

`

export const RightSection = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    & img{
        width: 400px;
        height: 400px;
    }
`