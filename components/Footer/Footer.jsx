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
                                <FooterLink key={footerLink.id} title={footerLink.title} links={footerLink.links}/>
                            ))
                        }
                    </FooterLinks>
                    <CopyRight>copyright &copy; {todaysDate} Apex Investments Inc. All rights reserved.</CopyRight>
                    <Disclaimer>
                        Quisque non tellus orci ac. Etiam erat velit scelerisque in dictum non consectetur. Scelerisque varius morbi enim nunc faucibus a. In tellus integer feugiat scelerisque varius morbi. Urna duis convallis convallis tellus id interdum velit. Facilisi nullam vehicula ipsum a arcu cursus.Tellus mauris a diam maecenas sed enim ut. Curabitur vitae nunc sed velit. Scelerisque varius morbi enim nunc faucibus a pellentesque. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.
                    </Disclaimer>
                </Container>
            </BottomSection>
        </Wrapper>
    );
}
 
export default Footer;