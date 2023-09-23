import { Wrapper } from "../../../components/Wrapper";
import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./ContactsStyle";
import React from "react";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contact">
      <Container>
        <Wrapper direction="column" align="center">
          <Title>Contact me</Title>
          <S.Form>
            <label>
              Name
              <S.Field />
            </label>
            <label>
              Email
              <S.Field />
            </label>
            <label>
              Message
              <S.Field as={"textarea"} />
            </label>
            <Button type="submit">Send</Button>
          </S.Form>
        </Wrapper>
      </Container>
    </S.Contacts>
  );
};
