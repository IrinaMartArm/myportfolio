import React from "react";
import { Menu } from "./Menu";
import { S } from "./HeaderMenuStyle";

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
        <Menu />
        </S.DesktopMenu>
    );
};
