import Link from 'next/link'
import styled from "styled-components";
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

const FooterLink = ({title, links}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <ul>
                {
                    links.map(link =>(
                        <li key={uuidv4()}>
                            <Link href="#">
                                <a >{link}</a>
                            </Link>
                        </li>
                    ))
                }
                
            </ul>
        </Wrapper>
    );
}
 

// PROPTYPES
FooterLink.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired
}



// STYLES
export default FooterLink;

const Wrapper = styled.div`
    li{
        list-style: none;
        margin-bottom: 10px;

        a{
            text-decoration: none;
            text-transform: capitalize;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;

            :hover{
                color: var(--white);
            }
        }
    }
`

const Title = styled.h4`
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 10px;
`

