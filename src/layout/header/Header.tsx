import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
    return ( 
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
}
 
const StyledHeader = styled.header`
    border: 1px solid green;
    display: flex;
    justify-content: space-between;
`