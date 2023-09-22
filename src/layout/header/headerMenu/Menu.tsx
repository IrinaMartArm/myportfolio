import React from "react";
import { S } from "./HeadeMenuStyle";

export const Menu: React.FC<{ items: Array<string> }> = (props: {
  items: Array<string>;
}) => {
  return (
    <ul>
      {props.items.map((i, index) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href="">
              {i}
              <S.Mask>
                <span>{i}</span>
              </S.Mask>
              <S.Mask>
                <span>{i}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};

