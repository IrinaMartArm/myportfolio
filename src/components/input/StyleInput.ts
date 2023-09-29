import styled from "styled-components";

const StyledInput = styled.div`
    input {
        border: none;
        border-bottom: 2px solid;
        outline: none;

        &::placeholder {
            opacity: 0;
        }

        &:focus-visible {
            border-color: blue;
        }

        &:focus + lable,
        &:not(:placeholder-shown) + lable {
            transform: translateY(-1.5rem);
            font-size: 0.8rem;
            opacity: 1;
        }
    }
    lable {
        position: absolute;
        left: 2px;
        transition: 0.2s ease-in;
        opacity: 0.8;
    }

    
`



export const S = {
    StyledInput
}