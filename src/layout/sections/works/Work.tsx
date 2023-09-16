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
    width: 40%;

`
    
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const StyledTitle = styled.h4`
    
`
const Text = styled.p`
    
`
const Link = styled.a`
    
`