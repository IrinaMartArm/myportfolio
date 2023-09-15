import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Skill } from "./Skill"

export  const Skills = () => {
    return ( 
        <StyledSkills>
            <Title>My Skills</Title>
            <Wrapper wrap="wrap">
               <Skill iconId={"css"} title={'html5'}/>
               <Skill iconId={"figma"} title={'html5'}/>
            </Wrapper>
        </StyledSkills>
    );
}
 
const StyledSkills = styled.section`
   display: flex;
   flex-direction: column;
   text-align: center;
   min-height: 100vh;
`