import styled from 'styled-components';
import myPhoto from './../../../assets/images/pictures/ira.webp'
import { Wrapper } from '../../../components/wrapper/Wrapper';
import { Container } from '../../../components/Container';
import { Theme } from '../../../style/Theme';
import { font } from '../../../style/Common';

export const Main = () => {
    return ( 
        <StyledMain>
            <Container>
                <Wrapper align='center' justify='space-around' gap='40px' wrap='wrap'>
                    <div>
                        <Hello>Hi, <span>my name is Irina</span></Hello>
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
    background-color: ${Theme.colors.secondary};
`

const Hello = styled.span`   
    letter-spacing: 2.5px;
    ${font({weight: 700, fmax: 50, fmin: 36})};

    span {
        white-space: nowrap;
    }
`

const MainTitle = styled.h1`  
    font-size: 36px;
    font-weight: 400;
    margin: 10px 0;
    ${font({weight: 400, fmax: 36, fmin: 20})}

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

    @media ${Theme.media.mobile} {
        margin: 15px 0;
    }
`

const Text =styled.p`
    ${font({weight: 700, fmax: 20, fmin: 16})};
` 

const Photo = styled.img`
    width: 330px;
    object-fit: cover;
    margin-right: 25px;

    @media ${Theme.media.mobile} {
        width: 300px;
    }
`

const PhotoFrame = styled.div`
    position: relative;
    z-index: 9;
    margin-top: 65px;

    &::before {
        content: '';
        position: absolute;
        width: 325px;
        height: 480px;
        border: 5px solid  ${Theme.colors.accent};
        top: -20px;
        left: 30px;
        z-index: -1;

        @media ${Theme.media.mobile} {
            width: 300px;
            height: 440px;
        }
    }
`

