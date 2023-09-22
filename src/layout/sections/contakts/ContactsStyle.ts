import styled from "styled-components";
import { Theme } from "../../../style/Theme";

const Contacts = styled.section``;
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    textarea {
        resize: none;
        height: 120px;
    }
`;
const Field = styled.input`
    max-width: 540px;
    width: 100%;
    border: 1px solid #4a4a4a;
    background-color: ${Theme.colors.primary};
    padding: 7px 15px;

    color: ${Theme.colors.white};
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.6px;

    &:focus-visible {
        outline: 1.5px solid ${Theme.colors.border};
    }
`;

export const S = {
    Contacts, Form, Field
}