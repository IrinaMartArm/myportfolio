import styled from "styled-components";
import { Theme } from "../../../style/Theme";

const Contacts = styled.section`
    position: relative;
`;
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    textarea {
        resize: none;
        height: 120px;
        &:focus-visible {
            outline: 1px solid ${Theme.colors.border};
        }
    }
`;
const Field = styled.input`
    max-width: 540px;
    width: 100%;
    border: 1px solid #4A4A4A;
    background-color: ${Theme.colors.primary};
    padding: 7px 15px;
    color: ${Theme.colors.white};
    &:focus-visible {
        outline: 1.5px solid ${Theme.colors.border};
    }
`;

export const S = {
    Contacts, Form, Field}