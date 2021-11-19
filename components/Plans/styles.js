import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--black-4);
    padding: 20px 0;
`

export const SectionTitle = styled.div`
    padding: 30px 0;

    h2{
        font-size: 1.8em;

        span{
            color: var(--light-green);
        }
    }

    a{
        display: none;
        justify-content: center;
        align-items: center;
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
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-size: 2.3em;
        }

        a{
            display: flex;
        }
    }
`

export const PlansSection = styled.div`

    @media(min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
`