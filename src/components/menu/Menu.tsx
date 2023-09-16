import styled from "styled-components";

export const Menu = (props:{items: Array<string>}) => {
    return ( 
        <StyledMenu>
            <ul>
                {props.items.map((i, index)=>{
                return <li key={index}><a href="">{i}</a></li>})}
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
 
