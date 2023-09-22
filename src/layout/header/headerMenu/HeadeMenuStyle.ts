import styled, { css } from "styled-components";
import { Theme } from "../../../style/Theme";

const Link = styled.a`
    text-align: center;
    font-family: Kalam;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.2;
    color: transparent;
`;
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: #a0b05d;
    display: inline-block;
    height: 50%;
    overflow: hidden;

    & + & {
        top: 50%;
        span {
        display: inline-block;
        transform: translateY(-50%);
        }
    }
`;
const MenuItem = styled.li`
    position: relative;

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
    }

    &:hover {
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

const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
        justify-content: center;
    }
`;
const StyledMobileMenu = styled.nav``;
const MenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        `}

    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
    }
`;

const StyledButton = styled.button<{ isOpen: boolean }>`
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
    Link, 
    MenuItem, 
    Mask, 
    StyledDesktopMenu,  
    StyledMobileMenu,  
    MenuWrapper, 
    StyledButton
}