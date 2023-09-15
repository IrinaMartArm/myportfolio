import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (  
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledTitle>{props.title}</StyledTitle>
        </StyledSkill>
    );
}
 
const StyledSkill = styled.div`
    width: 20%;
`
const StyledTitle = styled.h3`
    
`
