import React from "react";
import myPhoto from "./../../../assets/images/pictures/ira.webp";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/Container";
import { S } from "./MainStyles";

export const Main: React.FC = () => {
  return (
    <S.StyledMain>
      <Container>
        <Wrapper align="center" justify="space-around" gap="40px" wrap="wrap">
          <div>
            <S.Hello>
              Hi, <span>my name is Irina</span>
            </S.Hello>
            <S.MainTitle>
              a <span>frontend developer</span>
            </S.MainTitle>
            <S.Text>with passion for learning and creating.</S.Text>
          </div>
          <S.PhotoFrame>
            <S.Photo src={myPhoto} />
          </S.PhotoFrame>
        </Wrapper>
      </Container>
    </S.StyledMain>
  );
};
