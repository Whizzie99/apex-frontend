// import CountUp from 'react-countup'
import Container from '../Container/Container';
import { StyledWrapper, StyledSection, StyledHeroText, StyledMilestones, StyledMilestone, StyledCounter,StyledMilestoneContent} from './styles'

const Milestones = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledSection>
                    <StyledHeroText>
                        <h3>number speaks</h3>
                        <h2>We're always ready for a <span>challenge</span></h2>
                    </StyledHeroText>
                    <StyledMilestones>
                        <StyledMilestone>
                            <StyledCounter>
                                <h3>20</h3>
                                {/* <CountUp end={213}/> */}
                            </StyledCounter>
                            <StyledMilestoneContent>
                                <h3>crafted features</h3>
                                <p>Ut lectus arcu bibendum at varius vel pharetra vel. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.</p>
                            </StyledMilestoneContent>
                        </StyledMilestone>
                        <StyledMilestone>
                            <StyledCounter>
                                <h3>27</h3>
                                {/* <CountUp start={0} end={27} delay={0}/> */}
                            </StyledCounter>
                            <StyledMilestoneContent>
                                <h3>countries covered</h3>
                                <p>Ut lectus arcu bibendum at varius vel pharetra vel. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.</p>
                            </StyledMilestoneContent>
                        </StyledMilestone>
                    </StyledMilestones>
                </StyledSection>
            </Container>
        </StyledWrapper>
    );
}
 
export default Milestones;