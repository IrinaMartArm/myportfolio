import React from "react";
import { Menu } from "./Menu";
import { S } from "./HeadeMenuStyle";

export const MobileMenu: React.FC<{ items: Array<string> }> = (props: {
  items: Array<string>;
}) => {
  return (
    <S.StyledMobileMenu>
      <S.StyledButton isOpen={false}>
        <span></span>
      </S.StyledButton>
      <S.MenuWrapper isOpen={false}>
        <Menu items={props.items} />
      </S.MenuWrapper>
    </S.StyledMobileMenu>
  );
};
