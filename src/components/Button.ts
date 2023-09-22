import styled from "styled-components";
import { Theme } from "../style/Theme";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${Theme.colors.accent};
  transition: 0.2s ease-in;

  &:hover {
    color: ${Theme.colors.white};
    transform: scale(1.01);
  }
`;
