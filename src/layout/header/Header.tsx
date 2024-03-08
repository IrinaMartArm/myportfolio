import React from "react";
import { S } from "./Header_styles";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper";
import { DesktopMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";



export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <Wrapper justify="space-between" align="center">
          <Logo aria-label='logo'/>
          {width < breakpoint ? (
            <MobileMenu/>
          ) : (
            <DesktopMenu/>
          )}
        </Wrapper>
      </Container>
    </S.Header>
  );
};
