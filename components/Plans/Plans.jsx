import Link from 'next/link'
import { Container } from '../Navbar/styles';
import PlanCard from './PlanCard';

import { Wrapper, SectionTitle, PlansSection } from './styles';

const Plans = () => {
    return (
        <Wrapper>
            <Container>
                <SectionTitle>
                <h3>Save time. <span>invest</span> Multiply income.</h3>
                <Link href="#">
                    <a>find out more</a>
                </Link>
                </SectionTitle>
                <PlansSection>
                    <PlanCard/>
                </PlansSection>
            </Container>
        </Wrapper>
    );
}
 
export default Plans;