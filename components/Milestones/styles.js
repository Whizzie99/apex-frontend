import styled from "styled-components";

export const StyledWrapper = styled.div`
    padding: 50px 0;
`

export const StyledSection = styled.div`
    display: flex;
    width: 100%auto;
`

export const StyledHeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    h3{
        text-transform: capitalize;
    }

    h2{
        text-transform: capitalize;
        color: var(--light-green);
        font-size: 2.2em;
        text-align: center;
    }
`

export const StyledMilestones = styled.div`
    width: 50%;
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
    font-size: 1.2em;
    color: var(--light-green);
`

export const StyledMilestoneContent = styled.div`
    margin-left: 20px;

    h3{
        text-transform: capitalize;
        margin-bottom: 10px;
    }
`