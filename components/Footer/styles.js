import styled from "styled-components";

export const Wrapper = styled.div``

export const TopSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
    padding: 20px;
`

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: var(--white);
    width: 60%;
`

export const GridItem = styled.div`
    display: flex;
    align-items: center;
    
`

export const Icon = styled.span`
    border: 1px solid var(--white);
    border-radius: 5px;
    margin-right: 20px;
    padding: 10px 15px;

`

export const Description = styled.div`
    font-weight: bold;
`

export const BottomSection = styled.div`
    background: var(--black-2);
`

export const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`

export const LeftSection = styled.div``

export const Logo = styled.div`
    position: relative;
    width: 120px;
    height: 50px;

    img{
        top: 0;
    }
`

export const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.45;
    padding: 20px 0;
`

export const Socials = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const SocialIcon = styled.span`
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.3em;
`

export const Secondarylinks = styled.div`
    a{
        text-transform: capitalize;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        

        :nth-child(1){
            margin-right: 50px;
        }
    }
`

export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 30px 0;
` 
export const CopyRight = styled.p`
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    padding-top: 30px;
    padding-bottom: 20px;
`

export const Disclaimer = styled.p`
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    padding: 30px 0;
    font-size: 0.9em;
`