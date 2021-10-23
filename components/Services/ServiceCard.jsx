import Link from 'next/link'
import { ArrowRightIcon } from '@primer/octicons-react'
import TeamIcon from './ServicesIcons/TeamIcon';
import styled from 'styled-components'

const ServiceCard = () => {
    return (
        <Wrapper>
            <Container>
                <Card>
                    <CardIcon>
                        <TeamIcon/>
                    </CardIcon>
                    <Content>
                        <Title>Expert service</Title>
                        <Description>
                            Our experts are trained professionals and pronouncely master the art of profit making with ethics
                        </Description>
                        <Link href="#">
                            <a>learn more <ArrowRightIcon/></a>
                        </Link>
                    </Content>
                </Card>
            </Container>
        </Wrapper>
    );
}

export default ServiceCard;


const  Wrapper = styled.div`
    padding: 50px 0;
` 

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Card = styled.div`
    display: flex;
`

const CardIcon = styled.div`
    margin-right: 10px;
`

const Content = styled.div``

const Title = styled.h4``

const Description = styled.p``