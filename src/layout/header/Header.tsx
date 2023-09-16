import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { HeaderMenu } from "./HeaderMenu";

const menuItems = ['IR<I>NA', 'Home', 'Works', 'Contacts', 'Skills']

export const Header = () => {
    return ( 
        <StyledHeader>
            <Container>
                <Wrapper justify="space-between" align="center">
                    <span>IRINA</span>
                    {/* <Logo/> */}
                    <HeaderMenu items={menuItems}/>
                </Wrapper>                
            </Container>
        </StyledHeader>
    );
}
 
const StyledHeader = styled.header`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 0;
    background-color: rgba(31, 31, 32, 0.9);
    z-index: 9999;
`