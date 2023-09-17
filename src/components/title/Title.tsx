import styled from "styled-components";
import { Theme } from "../../style/Theme";

type TitlePropsStyled ={
    margin?: string
}
 
export const Title = styled.h2<TitlePropsStyled>`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 65px;
        height: 2px;
        background-color: ${Theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
    }
`