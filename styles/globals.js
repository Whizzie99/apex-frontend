import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    /* VARS */
    :root {
        --font-stack-1: "Nunito", sans-serif;
        --font-stack-2: "Nunito Sans", sans-serif;
        --light-green: #8fc343;
        --dark-green: #474e3d;
        --dark-green-2: #31352c;
        --white: #ffffff;
        --black: #000000;
        --black-2: #212224;
        --black-3: #151616;
        --black-4: #101112;
    }

    /* RESETS */
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: var(--font-stack-1);
    }

    /* a{
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
    } */
`