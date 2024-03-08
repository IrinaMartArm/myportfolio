import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Wrapper } from "../../components/Wrapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./FooterStyle";

const socialIconsData = [
  {
    iconId: "in",
    href: "https://www.linkedin.com/in/irina-martoyan/"
  },
  {
    iconId: "gt",
    href: "https://github.com/IrinaMartArm"
  },
  {
    iconId: "telegram",
    href: "https://t.me/oskar7070"
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Wrapper direction="column" align="center">
        <Logo />
        <S.SocialList>
          {socialIconsData.map((i, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink href={i.href}>
                  <Icon
                    iconId={i.iconId}
                    width="35px"
                    height="35px"
                    viewBox={'0 0 35px 35px'}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© Irina Martoyan Web Developer</S.Copyright>
      </Wrapper>
    </S.Footer>
  );
};
