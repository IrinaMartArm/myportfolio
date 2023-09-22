import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Wrapper } from "../../components/Wrapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./FooterStyle";

const socialIconsData = [
  {
    iconId: "in",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21px 21px",
  },
  {
    iconId: "gt",
    width: "35px",
    height: "35px",
    viewBox: "0 0 35px 35px",
  },
  {
    iconId: "telegram",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21px 21px",
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
                <S.SocialLink>
                  <Icon
                    iconId={i.iconId}
                    width={i.width}
                    height={i.height}
                    viewBox={i.viewBox}
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
