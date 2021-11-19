import styled from 'styled-components'
import Link from 'next/link'
import Proptypes from 'prop-types'


const PlanCard = ({title, price, perks }) => {
    return (
        <Card>
            <Title>{title}</Title>
            <Perks>
                {
                    perks.map(perk => (
                        <Perk key={perks.indexOf(perk) + 1}>{perk}</Perk>
                    ))
                }
            </Perks>
            <Price>{price}</Price>
            <Link href="#">
                <a >invest now</a>
            </Link>
        </Card>
    );
}
 
export default PlanCard;

// PROPTYPES
PlanCard.propTypes = {
    title: Proptypes.string.isRequired,
    price: Proptypes.string.isRequired,
    perks: Proptypes.arrayOf(Proptypes.string).isRequired
}

// STYLES
const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    background: var(--black-2);
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 20px;

    &::after{
        content: '';
        position: absolute;
        top: -100px;
        right: -100px;
        height: 300px;
        width: 300px;
        background-image: url('./images/currency.png');
        opacity: 0.9;
        background-size: cover;
        z-index: 1;
    }

    a{
        padding: 10px;
        text-decoration: none;
        border: 2px solid var(--light-green);
        color: var(--light-green);
        text-transform: capitalize;
        margin: 30px 0;
        transition: all .3s ease;
    }

    a:hover{
        background: var(--light-green);
        color: var(--white);
    }

    @media(min-width: 1200px){
        margin-bottom: 0;
    }
`

const Title = styled.h4`
    position: relative;
    margin-top: 45%;
    margin-bottom: 30px;
    font-size: 1.8em;
    z-index: 2;
    text-transform: capitalize;
`

const Perks = styled.ul`
    list-style: none;
    text-transform: capitalize;
`

const Perk = styled.li`
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Price = styled.p`
    color: var(--light-green);
    font-size: 1.5em;
    font-weight: bold;
    margin: 15px 0;
    margin-bottom: 30px;
`