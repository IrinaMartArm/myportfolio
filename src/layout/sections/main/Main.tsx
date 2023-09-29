import React from "react";
import myPhoto from "./../../../assets/images/pictures/551B5255-A6D0-4CA2-BFEB-984FED02BD01-_1_-2.webp";
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
              a <span>Web developer</span>
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
              <S.Photo src={myPhoto} alt="photo"/>
            </S.PhotoFrame>
          </Tilt>
        </Wrapper>
      </Container>
    </S.StyledMain>
  );
};
