import styled from 'styled-components';
import myPhoto from './../../../assets/images/pictures/ira.webp'
import { Wrapper } from '../../../components/wrapper/Wrapper';

export const Main = () => {
    return ( 
        <StyledMain>
            <Wrapper align='center' justify='space-around'>
                <div>
                    <Hello>Hi, my name is Irina </Hello>
                    <MainTitle>a web developer. </MainTitle>
                    <span>with passion for learning and creating.</span>
                </div>
                <Photo src={myPhoto} alt="" />
            </Wrapper>         
        </StyledMain>
    );
}

const StyledMain = styled.div`
    min-height: 100vh;
`

const Hello = styled.span`   
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2.5px;
`

const MainTitle = styled.h1`  
    font-family: Poppins;
    font-size: 27px;
    font-weight: 400;
    line-height: normal;
`
 
const Photo = styled.img`
    width: 350px;
    object-fit: cover
`