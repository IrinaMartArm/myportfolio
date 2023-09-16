import styled from "styled-components";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Title } from "../../../components/title/Title";
import { Button } from "../../../components/button/Button";

export const Contacts = () => {
    return (  
        <StyledContacts>
            <Wrapper direction="column" align="center">
                <Title>Contact me</Title>
                <StyledForm>
                    <span>Name</span>
                    <Field/>
                    <span>Email</span>
                    <Field/>
                    <span>Message</span>
                    <Field as={'textarea'}/>
                    <Button type="submit">Send</Button>
                </StyledForm>
            </Wrapper>            
        </StyledContacts>
    );
}
 
const StyledContacts = styled.section`
   
`
const StyledForm = styled.form`
   max-width: 400px;
   width: 100%;
   display: flex;
   flex-direction: column;
   /* gap: 15px; */

`
const Field = styled.input`
   
`