import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Skill } from "./Skill"
import { Container } from "../../../components/Container";

export  const Skills = () => {
    return ( 
        <StyledSkills>
            <Container>
                <Title>My Skills</Title>
                <Wrapper wrap="wrap" gap="30px" justify="space-between">
                    <Skill iconId={"figma"} title={'Figma'}/>
                    <Skill iconId={"css"} title={' CSS3'}/>
                    <Skill iconId={"html"} title={'HTML5'}/>
                    <Skill iconId={"vscode"} title={'VScode'}/>
                    <Skill iconId={"JS"} title={'JavaScript'}/>
                    <Skill iconId={"TS"} title={'TypeScript'}/>
                    <Skill iconId={"react"} title={'React'}/>
                    <Skill iconId={"react2"} title={'React Native'}/>
                    <Skill iconId={"sass"} title={'Sass'}/>
                    <Skill iconId={"redux"} title={'Redux'}/>
                    <Skill iconId={"gt"} title={'Redux'}/>
                    <Skill iconId={"styled-components"} title={'StyledComponents'}/>
                </Wrapper>
            </Container>
        </StyledSkills>
    );
}
 
const StyledSkills = styled.section`
   display: flex;
   flex-direction: column;
   text-align: center;
`