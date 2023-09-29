import styled, { css } from "styled-components";
import { Theme } from "../../../style/Theme";
import { motion } from "framer-motion";


const Works = styled.section`
    position: relative;
    text-align: center;    
`


const Work = styled(motion.div)`
    /* max-width: 500px;
    width: 330px; 
    flex-grow: 1; */
    border: 1px solid ${Theme.colors.border}; 
    position: relative;
    transition: 0.2s ease-in;
    padding: 20px;
    border-radius: 2%;

    /* &:hover {
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
    } */
`
const Box = styled.div`
    padding-top: 25px;
    text-align: start;
`
const ImgBox = styled.div`    
    background-color: rgba(0, 0, 0, 0.20); 
`
    
const Image = styled.img`
    width: 100%;
    /* height: 260px; */
    object-fit: cover;
    border-radius: 2%; 
`

const Title = styled.h4`
    font-family: Josefin Sans;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
`

const Text = styled.p`
    margin: 5px 0 20px;
`
const Button = styled.a`
    margin-right: 25px;
    position: relative;
    z-index: 2;
    

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 2px;
        width: 140%;
        background-color: ${Theme.colors.accent};
        bottom: 4px;
        left: -5px;
        border-radius: 3px;
        transition: ${Theme.animations.transition};
    }

    &:hover {
        &::before {
            height: 90%;
            z-index: -1;
        }
    }

    &:active {
        color: ${Theme.colors.primary};
        &::before {
            height: 90%;
            z-index: -1;
            
        }
    }
`
// Menu

const Menu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 355px;
        width: 100%;
        margin: 0 auto 40px;
    }
`;

const List = styled.ul`
    color: ${Theme.colors.accent};
`;

const ListItem = styled.li`
    color: ${Theme.colors.accent};
`;

const Link = styled.a<{active: boolean}>`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 2;

    &:hover {
        &::before{
        height: 5px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        left: 5px;
        right: 5px;
        bottom: 15px;
        background-color: ${Theme.colors.accent};
        z-index: -1;
        height: 0;
        transition: ${Theme.animations.transition};

        ${props => props.active && css<{active: boolean}>`
        height: 5px;
        `}
    }
`;


export const S = {
    Works,
    Text,
    Title,
    Image,
    ImgBox,
    Box,
    Work,
    Menu,
    Link,
    List,
    ListItem,
    Button
}