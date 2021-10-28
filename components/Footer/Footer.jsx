import Image from 'next/image';
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Container from '../Container/Container'
import { footerLinks } from './data/datas';
import { Wrapper, TopSection, Grid, GridItem, Icon, Description, BottomSection, FooterNav, LeftSection, Logo, RightSection, Socials, SocialIcon, Secondarylinks, FooterLinks, CopyRight, Disclaimer } from './styles';
import FooterLink from './FooterLink';



import logo from '../../public/images/logo.png'

const Footer = () => {

    const todaysDate = new Date().getFullYear()
    return (
        <Wrapper>
            <TopSection>
                <Grid>
                    <GridItem>
                        <Icon>
                            <FontAwesomeIcon icon="history"/>
                        </Icon>
                        <Description>5 years of excellence</Description>
                    </GridItem>

                    <GridItem>
                        <Icon>
                            <FontAwesomeIcon icon="trophy"/>
                        </Icon>
                        <Description>15+ global awards</Description>
                    </GridItem>

                    <GridItem>
                        <Icon>
                            <FontAwesomeIcon icon="phone-alt"/>
                        </Icon>
                        <Description>24//7 customer support</Description>
                    </GridItem>
                </Grid>
            </TopSection>
            <BottomSection>
                <Container>
                    <FooterNav>
                        <LeftSection>
                            <Logo>
                                <Image src={logo} alt="logo" layout="fill" placeholder="blur" objectFit="contain"/>
                            </Logo>
                        </LeftSection>
                        <RightSection>
                            <Socials>
                                <SocialIcon>
                                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                </SocialIcon>

                                <SocialIcon>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </SocialIcon>

                                <SocialIcon>
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </SocialIcon>

                                <SocialIcon>
                                    <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                                </SocialIcon>
                            </Socials>
                            <Secondarylinks>
                                <Link href="#">
                                    <a >company news</a>
                                </Link>

                                <Link href="#">
                                    <a >partnerships</a>
                                </Link>
                            </Secondarylinks>
                        </RightSection>
                    </FooterNav>
                    <FooterLinks>
                        {
                            footerLinks.map(footerLink => (
                                <FooterLink id={footerLink.id} title={footerLink.title} links={footerLink.links}/>
                            ))
                        }
                    </FooterLinks>
                    <CopyRight>copyright &copy; {todaysDate} Apex Investments Inc. All rights reserved.</CopyRight>
                    <Disclaimer>
                        Trading cryptocurrencies and leveraged products carries some level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain advice from one of our social media agents concerning our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website.
                    </Disclaimer>
                </Container>
            </BottomSection>
        </Wrapper>
    );
}
 
export default Footer;