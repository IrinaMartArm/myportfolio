import React from "react";
import { Menu } from "./Menu";
import { S } from "./HeadeMenuStyle";

export const DesktopMenu: React.FC<{ items: Array<string> }> = (props: {
  items: Array<string>;
}) => {
    return (
        <S.StyledDesktopMenu>
            <Menu items={props.items} />
        </S.StyledDesktopMenu>
    );
};

