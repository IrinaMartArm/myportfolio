import { S } from "./WorksStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Menu } from "./Menu";
import { Work } from "./Work";
import network from "./../../../assets/images/pictures/4575 1.png";
import { Container } from "../../../components/Container";
import React from "react";

const worksitems = ["All", "landing page", "React", "spa"];
const workData = [
  {
    title: "Social Network",
    image: network,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Adaptive Landings",
    image: network,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <Title>My Works </Title>
        <Menu items={worksitems} />
        <Wrapper justify="space-around" wrap="wrap" gap="30px">
          {workData.map((w, index) => {
            return (
              <Work key={index} title={w.title} text={w.text} image={w.image} />
            );
          })}
        </Wrapper>
      </Container>
    </S.Works>
  );
};
