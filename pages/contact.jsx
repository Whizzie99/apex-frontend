import { useForm } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message'
import axios from 'axios'
import styled from "styled-components";
import Container from "../components/Container/Container";

const Contact = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    async function onSubmitForm(values){
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_URL}`,
            header: {
                'Content-Type': 'application/json'
            },
            data: values,
        }

        try{
            const response = await axios(config);
            console.log(response);
            if(response.status && response.data.status == 200){
                reset({
                    values:{
                        name: '',
                        email: '',
                        message: ''
                    }
                })
                console.log('success'); 
            }
            
        } catch (err){
            console.log(err)
        }
        

        console.log(values)
    }
    
    return (
        <StyledWrapper>
            <Container>
                <StyledHeroSection>
                    <h2>Get in touch</h2>
                    <p>Want to get in touch? We'd love to hear from you</p>
                </StyledHeroSection>
                <StyledFormSection>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <input type="text" {...register("name",{required: true})} placeholder="name" />
                        {errors.name && <span>this field is required</span>}

                        <input
                            type="email" 
                            {...register("email", 
                                {
                                    required: 'This field is required',
                                    pattern: {
                                        value: emailRegEx,
                                        message: 'enter a valid email address'
                                    }
                                }
                            )} 
                            placeholder="email" />
                        {errors.email && <span>{errors.email.message}</span>}

                        <textarea {...register("message")} cols="30" rows="10"></textarea>
                        {errors.message && <span>this field is required</span>}
                        <button type="submit">submit</button>
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