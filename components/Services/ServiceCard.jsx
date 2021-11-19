import Link from 'next/link'
import PropTypes from 'prop-types'
import { ArrowRightIcon } from '@primer/octicons-react'
import styled from 'styled-components'

const ServiceCard = ({icon, title, description}) => {
    return (
        <Card>
            {icon}
            <Content>
                <Title>{title}</Title>
                <Description>
                    {description}
                </Description>
                <Link href="#">
                    <a>learn more <ArrowRightIcon/></a>
                </Link>
            </Content>
        </Card>
    );
}

export default ServiceCard;


// PROPTYPES
ServiceCard.prototypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


// STYLES
const Card = styled.div`
    display: flex;
    margin-bottom: 20px;

    > svg{
        height: 120px;
        width: 120px;
    }
`

const Content = styled.div`
    a{
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration: none;
        text-transform: capitalize;
        color: var(--grey);
        margin-top: 10px;
        transition: all .3s ease;

        :hover{
            color: var(--light-green);
        }

        svg{
            margin-top: 5px;
            margin-left: 5px;
        }
    }
`

const Title = styled.h3`
    font-size: 1.5em;
    text-transform: capitalize;
    margin-bottom: 15px;

    @media(min-width: 1200px){
        font-size: 1.7em;
    }
`

const Description = styled.p`
    color: var(--grey);
`