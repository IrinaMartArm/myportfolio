import styled from "styled-components";

type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Work = (props:  WorkPropsType) => {
    return (  
        <StyledWork>
            <Image src={props.image} alt="" />
            <StyledTitle>{props.title}</StyledTitle>
            <Text>{props.text}</Text>
            <Link href="">Demo</Link>
            <Link href="">Code</Link>
        </StyledWork>
    );
}
 
const StyledWork = styled.div`
    width: 45%;

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
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
`
const Link = styled.a`
    
`