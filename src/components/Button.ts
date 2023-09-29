import styled from "styled-components";
import { Theme } from "../style/Theme";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  background-color: ${Theme.colors.accent};
  transition: ${Theme.animations.transition};

  &:hover {
    color: ${Theme.colors.white};
    transform: scale(1.01);
  }
  &:active {
    color: ${Theme.colors.primary};
  }
`
