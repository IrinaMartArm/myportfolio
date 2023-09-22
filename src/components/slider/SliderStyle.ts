import styled from "styled-components";
import { Theme } from "../../style/Theme";

const Slider = styled.div`
    min-height: 100vh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    text-align: center;
`;

const Text = styled.p``;
const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px; 
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        & + span {
            margin-left: 5px;
        } 
        &:active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`;

export const S = {
    Slider,
    Slide, 
    Text,
    Pagination
}




