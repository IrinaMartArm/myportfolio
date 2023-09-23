import React from "react";
import { S } from "./WorksStyles";

export type StatusType = 'all' | 'landing page' | 'react' | 'spa'

type MenuPropsType = {
  items: Array<{status: StatusType, title: string}>
  changeStatus: (value: StatusType) => void
  status: string
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.Menu>
      <S.List>
        {props.items.map((i, index) => {
          return (
            <S.ListItem key={index}>
              <S.Link active={props.status === i.status} onClick={()=>{props.changeStatus(i.status)}}>{i.title}</S.Link>
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Menu>
  );
};

