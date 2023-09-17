import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Container } from "../../../components/Container";
import { Wrapper } from "../../../components/wrapper/Wrapper";

export  const Slogan = () => {
    return (  
        <StyledSlogan>
            <Container>
                <Wrapper justify="center">
                    <Title>I Am Available For Freelance</Title>
                </Wrapper>
            </Container>
        </StyledSlogan>
    );
}
 
const StyledSlogan = styled.section`
    
`