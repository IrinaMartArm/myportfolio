import styled from "styled-components";
import { Title } from "../../components/title/Title";
import { Icon } from "../../components/icon/Icon";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { Theme } from "../../style/Theme";
import { Logo } from "../../components/logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper direction="column" align="center">
        <Logo/>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="in"
                width="21px"
                height="21px"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="gt"
                width="35px"
                height="35px"
                viewBox="0 0 35px 35px"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId="telegram"
                width="21px"
                height="21px"
                viewBox="0 0 21px 21px"
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© Irina Martoyan Web Developer</Copyright>
      </Wrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.accent};

  &:hover {
    color: ${Theme.colors.white};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  opacity: 0.5;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
`;
