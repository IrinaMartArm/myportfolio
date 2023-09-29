import styled from "styled-components";
import { Theme } from "../../style/Theme";

const Footer = styled.footer`
  position: relative;
  background-color: ${Theme.colors.secondary};
  padding: 30px 0;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  margin: 15px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  border-radius: 50%;
  /* background-color: ${Theme.colors.accent}; */
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.accent};
  transition: ${Theme.animations.transition};

  &:hover {
    color: ${Theme.colors.white};
    transform: translateY(-4px);
    outline: 1px solid ${Theme.colors.accent};
  }

  &:active {
    color: ${Theme.colors.primary};
    background-color: ${Theme.colors.accent};
  }
`;

const Copyright = styled.small`
  opacity: 0.5;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
`;

export const S ={
    Footer,
    SocialItem,
    SocialLink,
    SocialList,
    Copyright
}