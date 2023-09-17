import styled from "styled-components";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Title } from "../../../components/title/Title";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../style/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <Wrapper direction="column" align="center">
          <Title>Contact me</Title>
          <StyledForm>
            <label>
              Name
              <Field />
            </label>
            <label>
              Email
              <Field />
            </label>
            <label>
              Message
              <Field as={"textarea"} />
            </label>
            <Button type="submit">Send</Button>
          </StyledForm>
        </Wrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
const StyledForm = styled.form`
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
