import React, { useState } from "react";
import { Menu } from "./Menu";
import { S } from "./HeaderMenuStyle";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.Button isOpen={menuIsOpen} onClick={onBtnClick} aria-label="button">
        <span></span>
      </S.Button>
      <S.MenuWrapper isOpen={menuIsOpen}>
        <Menu />
      </S.MenuWrapper>
    </S.MobileMenu>
  );
};
