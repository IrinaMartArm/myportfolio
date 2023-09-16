import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Skill } from "./Skill"

export  const Skills = () => {
    return ( 
        <StyledSkills>
            <Title>My Skills</Title>
            <Wrapper wrap="wrap" gap="100px">
               <Skill iconId={"figma"} title={'Figma'}/>
               <Skill iconId={"css"} title={'css'}/>
               <Skill iconId={"html"} title={'html5'}/>
               <Skill iconId={"vscode"} title={'vscode'}/>
               <Skill iconId={"JS"} title={'JS'}/>
               <Skill iconId={"TS"} title={'Type-script'}/>
               <Skill iconId={"react"} title={'React'}/>
               <Skill iconId={"react2"} title={'React Native'}/>
               <Skill iconId={"sass"} title={'sass'}/>
               <Skill iconId={"styled-components"} title={'Styled-components'}/>
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