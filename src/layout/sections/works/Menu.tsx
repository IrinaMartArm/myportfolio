import React from "react";
import { S } from "./WorksStyles";

export const Menu: React.FC<{items: Array<string>}> = (props: {items: Array<string>}) => {
  return (
    <S.Menu>
      <S.List>
        {props.items.map((i, index) => {
          return (
            <S.ListItem key={index}>
              <S.Link href="">{i}</S.Link>
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Menu>
  );
};

