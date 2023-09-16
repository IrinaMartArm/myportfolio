import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./Work";
import network from './../../../assets/images/pictures/4575 1.png'

const worksitems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (  
        <StyledWorks>
            <Title>My Works </Title>
            <Menu items={worksitems}/>
            <Wrapper justify="space-around">
                <Work title="Social Network" text="jdhfgrtrgg" image={network}/>
                <Work title="Adaptive Landings" text="jdhfgrtrgg" image={network}/>
            </Wrapper>
        </StyledWorks>
    );
}
 
const StyledWorks = styled.section`
    text-align: center;
    min-height: 100vh;
    gap: 60px;
    background-color: wheat
    
`