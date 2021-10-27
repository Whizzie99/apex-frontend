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
    justify-content: space-between;
    align-items: center;
    width: 70%;
`

const Award = styled.div`
    text-align: center;
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