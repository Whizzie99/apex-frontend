import styled from "styled-components";
import Container from '../Container/Container'
import AwardIcon from "./AwardIcon";

const Awards = () => {
    return (
        <Wrapper>
            <Container>
                <Section>
                    <AwardsGrid>
                        <Award>
                            <Icon>
                                <AwardIcon/>
                            </Icon>
                            <Title>Best CFD Broker</Title>
                            <Description>
                                TradeON Summit 2020
                            </Description>
                        </Award>

                        <Award>
                            <Icon>
                                <AwardIcon/>
                            </Icon>
                            <Title>Best Execution Broker</Title>
                            <Description>
                                Forex EXPO Dubai 2020
                            </Description>
                        </Award>

                        <Award>
                            <Icon>
                                <AwardIcon/>
                            </Icon>
                            <Title>Best Trading Platform</Title>
                            <Description>
                                London Summit 2020
                            </Description>
                        </Award>

                        <Award>
                            <Icon>
                                <AwardIcon/>
                            </Icon>
                            <Title>Best Trading Platform</Title>
                            <Description>
                                London Summit 2020
                            </Description>
                        </Award>
                    </AwardsGrid>
                </Section>
            </Container>
        </Wrapper>
    );
}
 
export default Awards;

const Wrapper = styled.div`
    padding: 50px 0;
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const AwardsGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 100%; */

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70%;
    }
`

const Award = styled.div`
    text-align: center;
    margin-bottom: 10px;

    @media(min-width: 1200px){
        margin-bottom: 0;
    }
`

const Icon = styled.span`
`

const Title = styled.h4`
    font-weight: bold;
`

const Description = styled.p`
    font-size: 0.9em;
    color: var(--grey);
`