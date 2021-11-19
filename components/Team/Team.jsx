import Container from "../Container/Container";
import Image from 'next/image'
import { teamMembers } from './data/datas'
import { StyledWrapper, StyledSectionTitle, StyledTeamSection,  StyledTeamMember, StyledMemberImage, StyledMemeberDescription} from "./styles";

import testImg from './assets/1.png'

const Team = () => {
    return (
        <StyledWrapper>
            <Container>
                <StyledSectionTitle>
                    <h2>Meet the team</h2>
                    <p>We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed investor.</p>
                </StyledSectionTitle>

                <StyledTeamSection>
                    {
                        teamMembers.map(teamMember =>(
                            <StyledTeamMember key={teamMember.id}>
                                <StyledMemberImage>
                                    <Image src={teamMember.image} placeholder="blur"/>
                                </StyledMemberImage>
                                <StyledMemeberDescription>
                                    <h4>{teamMember.position}</h4>
                                    <h3>{teamMember.name}</h3>
                                    <p>{teamMember.comments}</p>
                                </StyledMemeberDescription>
                            </StyledTeamMember>
                        ))
                    }
                    
                </StyledTeamSection>
            </Container>
        </StyledWrapper>
    );
}
 
export default Team;