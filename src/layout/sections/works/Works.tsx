import styled from "styled-components";
import { Title } from "../../../components/title/Title";
import { Wrapper } from "../../../components/wrapper/Wrapper";
import { Menu } from "./Menu";
import { Work } from "./Work";
import network from './../../../assets/images/pictures/4575 1.png'
import { Container } from "../../../components/Container";

const worksitems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (  
        <StyledWorks>
            <Container>
                <Title>My Works </Title>
                <Menu items={worksitems}/>
                <Wrapper justify="space-around">
                    <Work title="Social Network" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit." image={network}/>
                    <Work title="Adaptive Landings" text="jdhfgrtrgg" image={network}/>
                </Wrapper>
            </Container>
        </StyledWorks>
    );
}
 
const StyledWorks = styled.section`
    text-align: center;
    gap: 60px;
    
`