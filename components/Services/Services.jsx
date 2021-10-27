import styled from "styled-components";
import Container from "../Container/Container";
import ServiceCard from "./ServiceCard";
import { services } from "./data/datas";

const Servcies = () => {
    return (
        <Wrapper>
            <Container>
                <ServicesGrid>
                    {
                        services.map(service => (
                            <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description}/>
                        ))
                    }
                </ServicesGrid>
            </Container>
        </Wrapper>
    );
}
 
export default Servcies;

const  Wrapper = styled.div`
    background: linear-gradient(rgba(143, 195, 67, 0.5), rgb(255, 255, 255));
    padding: 50px 0;
` 

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`