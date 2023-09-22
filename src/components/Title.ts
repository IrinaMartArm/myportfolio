import styled from "styled-components";
import { Theme } from "../style/Theme";
import { font } from "../style/Common";

type TitlePropsStyled = {
    margin?: string;
};

export const Title = styled.h2<TitlePropsStyled>`
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;
    ${font({ weight: 600, fmax: 36, fmin: 30 })}

    &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 65px;
    height: 2px;
    background-color: ${Theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;

    @media ${Theme.media.tablet} {
        bottom: -15px;
        }
    }

    @media ${Theme.media.mobile} {
        margin-bottom: 70px;
    }
`;
