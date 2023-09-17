import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Wrapper } from "../../../components/wrapper/Wrapper";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (  
        <StyledSkill>
            <Wrapper direction="column" align="center" gap="15px">
                <Icon width="120px" height="120px" iconId={props.iconId}/>
                <StyledTitle>{props.title}</StyledTitle>
            </Wrapper>          
        </StyledSkill>
    );
}
 
const StyledSkill = styled.div`
    width: 200px;
    text-align: center;
`
const StyledTitle = styled.h3`
    
`
