import styled from "styled-components";
import Container from "../components/Container/Container";

const Contact = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledHeroSection>
                    <h2>Get in touch</h2>
                    <p>Want to get in touch? We'd love to hear from you</p>
                </StyledHeroSection>
                <StyledFormSection>
                    <form>
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button>submit</button>
                    </form>
                </StyledFormSection>
            </Container>
        </StyledWrapper>
    );
}
 
export default Contact;


const StyledWrapper = styled.div`
    background: var(--grey-4);
    padding: 50px 0;
`

const StyledHeroSection = styled.div`
    text-align: center;

    h2{
        font-size: 2.3em;
    }

    p{
        font-size: 1.1em;
    }
`

const StyledFormSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
    form{
        width: 100%;
        display: grid;
        grid-template-rows: 1fr;
        row-gap: 20px;

        input, textarea{
            padding: 10px;
            background: transparent;
            border: 1px solid;
        }

        input::placeholder{
            text-transform: capitalize;
            font-family: var(--primary-font);
        }

        button{
            padding: 10px;
            border: 2px solid var(--light-green);
            background: var(--light-green);
            font-size: 0.9em;
            text-transform: capitalize;
            cursor: pointer;
            transition: all 0.3s ease;

            :hover{
                background: transparent;
                color: var(--light-green);
            }
        }

    }

    @media(min-width: 1200px){
        form{
            width: 500px;
        }
    }
`