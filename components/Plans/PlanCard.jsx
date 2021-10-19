import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import sample from '../../public/images/data_analytics.png'

const PlanCard = () => {
    return (
        <Card>
            {/* <BgImage>
                <Image src={sample} placeholder="blur"/>
            </BgImage> */}
            <Title>Bronze</Title>
            <Perks>
                <Perk>return 6%</Perk>
                <Perk>every week</Perk>
                <Perk>for 5 weeks</Perk>
                <Perk>Total 30% + capital</Perk>
            </Perks>
            <Price>$500</Price>
            <Link href="#">
                <a >invest now</a>
            </Link>
        </Card>
    );
}
 
export default PlanCard;

const Card = styled.div`
    position: relative;
    overflow: hidden;

    ::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background-image: url('../../public/images/data_analytics.png');
        height: 200px;
        width: 200px;
        z-index: 999;

    }
`

const BgImage = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;


    /* img{
        position: absolute;
        top: -20px;
        right: 0;
        height: 200px;
        width: 200px;
    } */
`

const Title = styled.h4``

const Perks = styled.ul``

const Perk = styled.li``

const Price = styled.p``