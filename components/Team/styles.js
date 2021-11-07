import styled from "styled-components";

export const StyledWrapper = styled.div`
    background-color: var(--grey-4);
    background-image: url('./images/team_bg.png');
    background-position: center;
    background-size: cover;
    padding: 50px 0;
    margin-bottom: 50px;
    border-radius: 15px;
`

export const StyledSectionTitle = styled.div`
    text-align: center;

    h2{
        font-size: 2.2em;
        text-transform: capitalize;
    }

    p{
        font-size: 1.1em;
        margin: 10px 0;
        color: var(--grey);
    }
`

export const StyledTeamSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 40px;
`

export const StyledTeamMember = styled.div`
    display: flex;
`

export const StyledMemberImage = styled.div`
    width: 100%;
    flex: 15%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 150px;
        object-fit: contain;
        border-radius: 50%;
    }
`

export const StyledMemeberDescription = styled.div`
    flex: 85%;

    h4{
        text-transform: uppercase;
        color: var(--grey);
        margin: 10px 0;
    }

    h3{
        text-transform: capitalize;
        font-weight: bold;
        margin-bottom: 15px;
    }
`