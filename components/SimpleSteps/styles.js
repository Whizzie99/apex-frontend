import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 0;
`

export const StepsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    text-align: center;
    border: 1px solid var(--grey-2);
    border-radius: 10px;
    width: 80%;
    padding: 20px;
`

export const Title = styled.h3`
    display: inline;
    position: relative;
    top: -40px;
    text-align: center;
    background: var(--white);
    color: var(--light-green);
    font-size: 1.6em;
`

export const Steps = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 95%;
`

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Count = styled.span`
    color: var(--light-green);
    font-size: 1.2em;
    font-weight: bold;
    border: 3px solid var(--light-green);
    border-radius: 50%;
    padding: 10px 17px;
    margin-bottom: 20px;
`

export const Description = styled.p`
    text-transform: capitalize;
    color: var(--grey);
`