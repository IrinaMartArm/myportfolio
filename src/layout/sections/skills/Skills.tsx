import React from "react";
import { S } from "./SkillsStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Skill } from "./Skill";
import { Container } from "../../../components/Container";

const skillsData = [
  { iconId: "figma", title: "Figma" },
  { iconId: "css", title: "CSS3" },
  { iconId: "html", title: "HTML5" },
  { iconId: "vscode", title: "VScode" },
  { iconId: "JS", title: "JavaScript" },
  { iconId: "TS", title: "TypeScript" },
  { iconId: "react", title: "React" },
  { iconId: "react2", title: "React Native" },
  { iconId: "sass", title: "Sass" },
  { iconId: "redux", title: "Redux" },
  { iconId: "git", title: "Git" },
  { iconId: "styled-components", title: "StyledComponents" },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id="skills">
      <Container>
        <Title>My Skills</Title>
        <Wrapper wrap="wrap" gap="30px" justify="space-between">
          {skillsData.map((skill, index) => {
            return (
              <Skill key={index} iconId={skill.iconId} title={skill.title} />
            );
          })}
        </Wrapper>
      </Container>
    </S.Skills>
  );
};
