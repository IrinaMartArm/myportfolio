import styled, { css } from "styled-components";
import { Theme } from "../../../style/Theme";
import { Link } from "react-scroll";


const MenuItem = styled.li`
    position: relative;
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: ${Theme.colors.accent};
    display: inline-block;
    height: 50%;
    overflow: hidden;
    transition: ${Theme.animations.transition};

    & + & {
        top: 50%;
        span {
        display: inline-block;
        transform: translateY(-50%);
        }
    }
`;

const NavLinks = styled(Link)`
    text-align: center;
    font-family: Kalam,serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.2;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        top: 48%;
        left: -10px;
        right: -10px;
        z-index: 2;
        transform: scale(0);
        transition: ${Theme.animations.transition};
    }
    &:hover, &.active {
        &::before {
        transform: scale(1);
        }

        ${Mask} {
        transform: skewX(5deg) translateX(1px);
        color: white;
        & + ${Mask} {
            transform: skewX(12deg) translateX(-1px);
        }
        }
    }
`;



const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
        justify-content: center;
    }
`;



const MobileMenu = styled.nav``;
const MenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .5s ease-in;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            transform: translateY(0);
        `}

    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -110px;
    right: -100px;
    z-index: 9999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.white};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            background-color: rgb(255, 255, 255, 0);
        `}

        &::before {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.white};
        position: absolute;
        transform: translateY(-10px);

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translate(0);
            `}
        }

        &::after {
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.white};
        position: absolute;
        transform: translateY(10px);

        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
            transform: rotate(45deg) translate(0);
            `}
        }
    }
`;


export const S = {
    NavLinks, 
    MenuItem, 
    Mask, 
    DesktopMenu,  
    MobileMenu,  
    MenuWrapper, 
    Button
}