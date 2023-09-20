import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { HeaderMenu } from "./HeaderMenu";
import { MobileMenu } from "./MobileMenu";

const menuItems = ['Home', 'Works', 'Contacts', 'Skills']

export const Header = () => {
    return ( 
        <StyledHeader>
            <Container>
                <Wrapper justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu items={menuItems}/>
                    <MobileMenu items={menuItems}/>
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
    padding: 5px 0;
    background-color: rgba(31, 31, 32, 0.9);
    z-index: 9999;
`