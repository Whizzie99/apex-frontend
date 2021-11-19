import styled from "styled-components";
import Container from "../Container/Container";
import BitcoinIcon from "./Icons/BitcoinIcon";
import MastercardIcon from "./Icons/MastercardIcon";
import VisaIcon from "./Icons/VisaIcon";
import SkrillIcon from "./Icons/SkrillIcon";
import PaypalIcon from "./Icons/PaypalIcon";
import NetellerIcon from "./Icons/NetellerIcon";


const PaymentMethods = () => {
    return (
        <Wrapper>
            <Container>
                <Title>payment methods</Title>
                <Section>
                    <PaymentTypesGrid>
                        <PaymentType>
                            <BitcoinIcon/>
                        </PaymentType>

                        <PaymentType>
                            <MastercardIcon/>
                        </PaymentType>

                        <PaymentType>
                            <VisaIcon/>
                        </PaymentType>

                        <PaymentType>
                            <SkrillIcon/>
                        </PaymentType>

                        <PaymentType>
                            <PaypalIcon/>
                        </PaymentType>

                        <PaymentType>
                            <NetellerIcon/>
                        </PaymentType>
                    </PaymentTypesGrid>
                </Section>
            </Container>
        </Wrapper>
    );
}
 
export default PaymentMethods;

const Wrapper = styled.div`
    padding: 30px 0;
    background-image: url('../images/payment_bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Title = styled.h3`
    text-align: center;
    text-transform: capitalize;
    font-size: 1.7em;
    color: var(--light-green);
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PaymentTypesGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 30px;
    }
`

const PaymentType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media(min-width: 1200px){
        margin-bottom: 0;
    }
`