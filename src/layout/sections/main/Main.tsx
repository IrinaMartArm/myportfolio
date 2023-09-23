import React from "react";
import myPhoto from "./../../../assets/images/pictures/ira.webp";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/Container";
import { S } from "./MainStyles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
  return (
    <S.StyledMain id="home">
      <Container>
        <Wrapper align="center" justify="space-around" gap="40px" wrap="wrap">
          <div>
            <S.Hello>
              Hi, <span>my name is Irina</span>
            </S.Hello>
            <S.MainTitle>
              a <span>frontend developer</span>
            </S.MainTitle>
            <S.Text>
              <Typewriter options={{
                          strings: [' with passion for learning and creating.'],
                          autoStart: true,
                          loop: true,
                          delay: 50
                        }}
                      />
            </S.Text>
          </div>
          <Tilt className="parallax-effect" perspective={500}>
            <S.PhotoFrame>
              <S.Photo src={myPhoto} />
            </S.PhotoFrame>
          </Tilt>
        </Wrapper>
      </Container>
    </S.StyledMain>
  );
};
