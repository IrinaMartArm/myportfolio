import styled from "styled-components";
import { Wrapper } from "../wrapper/Wrapper";

export const Slider = () => {
    return (  
        <StyledSlider>
           <Wrapper>
            <Slide>
                    <Text></Text>

                </Slide>
           </Wrapper>
           <Pagination>
                <span></span>
                <span></span>
                <span></span>
           </Pagination>
        </StyledSlider>
    );
}
 
const StyledSlider = styled.div`
    min-height: 100vh;
`

const Slide = styled.div`
    max-width: 500px;
`

const Text = styled.p`
    
`
const Pagination = styled.span`
    span {
        
    }
`