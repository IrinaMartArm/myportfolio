import styled from "styled-components";
import { Theme } from "../../../style/Theme";

export const Menu = (props: { items: Array<string> }) => {
  return (
    <StyledMenu>
      <StyledList>
        {props.items.map((i, index) => {
          return (
            <StyledListItem key={index}>
              <Link href="">{i}</Link>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  margin-bottom: 40px;
  
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const StyledList = styled.ul`
  color: ${Theme.colors.accent};
`;

const StyledListItem = styled.li`
  color: ${Theme.colors.accent};
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 2;

  &:hover {
    &::before{
      height: 5px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    left: 5px;
    right: 5px;
    bottom: 15px;
    background-color: ${Theme.colors.accent};
    z-index: -1;
  }
`;
