import React from "react";
import { Wrapper } from "../Wrapper";
import { S } from "./SliderStyle";

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <Wrapper>
        <S.Slide>
          <S.Text></S.Text>
        </S.Slide>
      </Wrapper>
      <S.Pagination>
        <span></span>
        <span></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  );
};

