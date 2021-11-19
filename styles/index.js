import styled from 'styled-components'

export const Hero = styled.div`
    background: var(--black-2);
    height: 100vh;
    width: 100%;
`

export const HeroContent = styled.div`
    

    @media(min-width: 1200px){
        display: flex;
        height: 90vh;
        width: 100%;
    }
`

export const LeftSection = styled.div`
    padding: 0 20px;

    @media(min-width: 1200px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding: 0 50px;
    }
`

export const Content = styled.div`

    h1{
        font-size: 2.2em;
        font-weight: bold;
        text-transform: capitalize;
        color: var(--white);
    }

    p{
        display: none;
        margin: 10px 0;
        margin-bottom: 30px;
        font-size: 1.2em;
        color: var(--white);
    }

    a{
        display: none;
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

    @media(min-width: 1200px){

        h1{
            font-size: 3em;
        }
        p{
            display: block;
        }

        a{
            display: inline;
        }
    }

`

export const RightSection = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    

    & img{
        width: 400px;
        height: 400px;
    }

    @media(min-width: 1200px){
        width: 50%;
    }
`