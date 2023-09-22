import React from "react";
import styled from "styled-components";
import { Title } from "../../../components/Title";
import { Container } from "../../../components/Container";
import { Wrapper } from "../../../components/Wrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <Wrapper justify="center">
          <Title>I Am Available For Freelance</Title>
        </Wrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  text-align: center;
`;
