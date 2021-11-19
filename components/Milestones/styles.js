import styled from "styled-components";

export const StyledWrapper = styled.div`
    padding: 50px 0;
`

export const StyledSection = styled.div`
    

    @media(min-width: 1200px){
        display: flex;
        width: 100%;
    }
`

export const StyledHeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h3{
        text-transform: capitalize;
    }

    h2{
        text-transform: capitalize;
        color: var(--light-green);
        font-size: 2.2em;
        text-align: center;
    }

    @media(min-width: 1200px){
        width: 50%;
    }
`

export const StyledMilestones = styled.div`
    margin-top: 20px;

    @media(min-width: 1200px){
        width: 50%;
        margin-top: 0;
    }
`

export const StyledMilestone = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const StyledCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    font-size: 1.5em;
    color: var(--light-green);

    @media(min-width: 1200px){
        font-size: 1.2em;
    }
`

export const StyledMilestoneContent = styled.div`
    margin-left: 20px;

    h3{
        text-transform: capitalize;
        margin-bottom: 10px;
    }
`