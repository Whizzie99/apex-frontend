import Link from 'next/link'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

import { Hero, HeroContent, LeftSection, Content, RightSection } from '../styles/index'

import image1 from '../public/images/team_work.png'
import image2 from '../public/images/analytics.png'
import Plans from '../components/Plans/Plans';
import Servcies from '../components/Services/Services';
import SimpleSteps from '../components/SimpleSteps/SimplesSteps';
import Awards from '../components/Awards/Awards';
import PaymentMethods from '../components/PaymentMethods/PaymentMethods';

const Home = () => {

    const handleDragStart = (e) => e.preventDefault();

    const carouselItems = [
        {
            id: 1,
            title: 'New standard stock broker.',
            subText: 'Trade forex, cryptocurrencies, synthetic and stock indices from a single account.',
            image: image1
        },
        {
            id: 2,
            title: 'Multi-regulated global broker.',
            subText: 'A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA',
            image: image2
        }
    ]

    const mappedCarouselItems = carouselItems.map(carouselItem => (
        <HeroContent key={carouselItem.id} onDragStart={handleDragStart} role="presentation">
            <LeftSection>
                <Content>
                    <h1>{carouselItem.title}</h1>
                    <p>{carouselItem.subText}</p>
                    <Link href="/about">
                        <a>learn more</a>
                    </Link>
                </Content>
            </LeftSection>
            <RightSection>
                <Image src={carouselItem.image} alt="image" placeholder="blur"/>
            </RightSection>
        </HeroContent>
    ));


    return (
        <>
            <Hero>
                <AliceCarousel
                autoPlay={true}
                autoPlayInterval={3000}
                disableAutoPlayOnAction={true}
                mouseTracking 
                items={mappedCarouselItems}
                disableButtonsControls={true}
                disableDotsControls={true}
                infinite={true}
                animationEasingFunction="ease"
                animationDuration={800}
                />
            </Hero>
            <Plans/>
            <Servcies/>
            <SimpleSteps/>
            <Awards/>
            <PaymentMethods/>
        </>
    );
}
 
export default Home;