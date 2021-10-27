import Link from 'next/link'
import Container from '../Container/Container';
import {ChevronRightIcon} from '@primer/octicons-react';
import { plans } from './data/data';
import PlanCard from './PlanCard';

import { Wrapper, SectionTitle, PlansSection } from './styles';

const Plans = () => {
    return (
        <Wrapper>
            <Container>
                <SectionTitle>
                <h2>Save time. <span>Invest.</span> Multiply income.</h2>
                <Link href="#">
                    <a>find out more <ChevronRightIcon/> </a>
                </Link>
                </SectionTitle>
                <PlansSection>
                    {
                        plans.map(plan =>(
                            <PlanCard key={plan.id} title={plan.title} img={plan.bgimg} perks={plan.perks} price={plan.price}/>
                        ))
                    }
                    
                </PlansSection>
            </Container>
        </Wrapper>
    );
}
 
export default Plans;