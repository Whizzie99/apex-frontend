import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--black-4);
    padding: 20px 0;
`

export const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    h2{
        font-size: 2.3em;

        span{
            color: var(--light-green);
        }
    }

    a{
        display: flex;
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
`

export const PlansSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`