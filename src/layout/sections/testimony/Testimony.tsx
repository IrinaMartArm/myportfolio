import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Slider } from "../../../components/slider/Slider";


export const Testimony: React.FC = () => {
    return (  
        <StyledTestimony>
            <Container>
                <Title>Testimony</Title>
                <Wrapper>
                    <Slider/>
                </Wrapper>
            </Container>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
    position: relative;
`