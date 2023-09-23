import React from "react";
import { S } from "./HeaderMenuStyle";

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Contacts",
    href: "contact",
  },
  {
    title: "Skills",
    href: "skills",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((i, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLinks 
            to={i.href}
            smooth={true}
            activeClass="active"
            spy={true}
            >
              {i.title}
              <S.Mask>
                <span>{i.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{i.title}</span>
              </S.Mask>
            </S.NavLinks>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
