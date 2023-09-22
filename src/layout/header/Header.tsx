import React, { useEffect, useState } from "react";
import { S } from "./Header_styles";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper";
import { DesktopMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";

const menuItems = ["Home", "Works", "Contacts", "Skills"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowresize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowresize);
    return () => window.removeEventListener("resize", handleWindowresize);
  }, []);

  return (
    <S.Header>
      <Container>
        <Wrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu items={menuItems} />
          ) : (
            <DesktopMenu items={menuItems} />
          )}
        </Wrapper>
      </Container>
    </S.Header>
  );
};
