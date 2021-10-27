import Container from "../Container/Container";
import { Wrapper, StepsSection, Content, Title, Steps, Step, Count, Description } from "./styles";


const SimpleSteps = () => {
    return (
        <Wrapper>
            <Container>
                <StepsSection>
                    <Content>
                        <Title>Simple steps to start trade</Title>
                        <Steps>
                            <Step>
                                <Count>1</Count>
                                <Description>register account</Description>
                            </Step>
                            <Step>
                                <Count>2</Count>
                                <Description>fund your account</Description>
                            </Step>
                            <Step>
                                <Count>3</Count>
                                <Description>start trade</Description>
                            </Step>
                        </Steps>
                    </Content>
                </StepsSection>
            </Container>
        </Wrapper>
    );
}
 
export default SimpleSteps;