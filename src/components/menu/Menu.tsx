import styled from "styled-components";

export const Menu = () => {
    return ( 
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Contakts</a></li>
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        border: 1px solid red;
        gap: 40px;

    }
`
 
