import styled from "styled-components";
import Container from "../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "../components/Team/Team";

const About = () => {
    return (  
        <StyledWrapper>
            <Container>
                <StyledHeroSection>
                    <h2>putting our clients first <span>since 2016</span></h2>
                    <p>For more than 5 years, we’ve been empowering clients by helping them take control of their financial lives.</p>
                </StyledHeroSection>

                <StyledFeaturesSection>
                    <StyledFeature>
                        <span>
                            <FontAwesomeIcon icon="leaf"/>
                        </span>
                        <StyledFeatureContent>
                            <h3>philosophy</h3>
                            <p>Our trading philosophy covers the basics of the stock market exchange. Our broker is dedicated to equity.</p>
                        </StyledFeatureContent>
                    </StyledFeature>

                    <StyledFeature>
                        <span>
                            <FontAwesomeIcon icon="hourglass-end"/>
                        </span>
                        <StyledFeatureContent>
                            <h3>history</h3>
                            <p>Profitabletradex has its long history right from Monee Meta 5. In the last couple of years we have been remained dedicated.</p>
                        </StyledFeatureContent>
                    </StyledFeature>

                    <StyledFeature>
                        <span>
                            <FontAwesomeIcon icon="flag"/>
                        </span>
                        <StyledFeatureContent>
                            <h3>culture</h3>
                            <p>Making profit from understanding the current trends of the stock market is prioritized from day one.</p>
                        </StyledFeatureContent>
                    </StyledFeature>
                </StyledFeaturesSection>
                <Team/>
            </Container>
        </StyledWrapper>
    );
}
 
export default About;


const StyledWrapper = styled.div``

const StyledHeroSection = styled.div`
    text-align: center;
    margin-top: 60px;

    h2{
        font-size: 2.5em;
        text-transform: capitalize;
    }

    span{
        color: var(--light-green);
    }

    p{
        color: var(--grey);
        font-size: 1.2em;
        margin: 10px 0;
    }
`

const StyledFeaturesSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 50px 0;
`

const StyledFeature = styled.div`
    display: flex;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        font-size: 1.2em;
        background: var(--light-green);
        border-radius: 50%;
        margin-right: 20px;
        flex: 15%;
    }
`

const StyledFeatureContent = styled.div`
    flex: 85%;
    
    h3{
        text-transform: capitalize;
        margin-bottom: 10px;
        font-weight: bolder;
    }
`