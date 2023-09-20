import styled from "styled-components";
import { Theme } from "../../../style/Theme";

type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Work = (props:  WorkPropsType) => {
    return (  
        <StyledWork>
            <ImgBox>
                <Image src={props.image}/>
            </ImgBox>
            <Box>
                <StyledTitle>{props.title}</StyledTitle>
                <Text>{props.text}</Text>
            </Box>            
        </StyledWork>
    );
}
 
const StyledWork = styled.a`
    width: 45%;    
    border: 1px solid ${Theme.colors.border}; 
    position: relative;
    transition: 0.2s ease-in;

    &:hover {
        outline: 2px solid ${Theme.colors.accent};
        transform: scale(1.02);
        
        &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.10);        
        }
    }
    &:active {
        
    }
`
const Box = styled.div`
    padding: 25px 20px;
    text-align: start;
`
const ImgBox = styled.div`    
    background-color: rgba(0, 0, 0, 0.20);  
`
    
const Image = styled.img`
    width: 100%;
    /* height: 260px; */
    object-fit: cover;
`

const StyledTitle = styled.h4`
    font-family: Josefin Sans;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
`

const Text = styled.p`
    margin: 5px 0 20px;
`
