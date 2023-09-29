import styled from 'styled-components';
import { Theme } from '../../../style/Theme';
import { font } from '../../../style/Common';

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
            height: 7px;
            /* left: 30px; */
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
    height: 440px;
    object-fit: cover;
    margin-right: 25px;

    @media ${Theme.media.mobile} {
        width: 300px;
    }
`

const PhotoFrame = styled.div`
    position: relative;
    z-index: 9;
    margin-top: 25px;

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

export const S = {
    StyledMain,
    MainTitle,
    Hello,
    Photo,
    PhotoFrame,
    Text
}