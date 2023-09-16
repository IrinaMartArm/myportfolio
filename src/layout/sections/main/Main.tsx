import styled from 'styled-components';
import myPhoto from './../../../assets/images/pictures/ira.webp'
import { Wrapper } from '../../../components/wrapper/Wrapper';
import { Container } from '../../../components/Container';
import { Theme } from '../../../style/Theme';

export const Main = () => {
    return ( 
        <StyledMain>
            <Container>
                <Wrapper align='center' justify='space-between'>
                    <div>
                        <Hello>Hi, my name is Irina </Hello>
                        <MainTitle>a <span>frontend developer</span></MainTitle>
                        <Text>with passion for learning and creating.</Text>
                    </div>
                    <PhotoFrame>
                        <Photo src={myPhoto}/>
                    </PhotoFrame>        
                </Wrapper>    
            </Container>     
        </StyledMain>
    );
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* background-color: #fff5e7 */
    background-color: #1F1F20;
`

const Hello = styled.span`   
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2.5px;
`

const MainTitle = styled.h1`  
    font-size: 36px;
    font-weight: 400;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 2;
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 90%;
            height: 15px;
            left: 50px;
            bottom: 10px;
            z-index: -1;
            background-color: ${Theme.colors.accent}
        }
    }
`
const Text =styled.p`
     font-size: 20px;
` 
const Photo = styled.img`
    width: 330px;
    object-fit: cover
`
const PhotoFrame = styled.div`
   position: relative;
   z-index: 9;
   &::before {
    content: '';
    position: absolute;
    width: 340px;
    height: 500px;
    border: 5px solid  ${Theme.colors.accent};
    top: -30px;
    left: 30px;
    z-index: -1;
   }
`

