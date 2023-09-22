import { Icon } from "../../../components/icon/Icon";
import { Wrapper } from "../../../components/Wrapper";
import { S } from "./SkillsStyles";

type SkillPropsType = {
    iconId: string;
    title: string;
    width?: string;
};

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
        <Wrapper direction="column" align="center" gap="15px">
            <Icon width="120px" height="120px" iconId={props.iconId} />
            <S.Title>{props.title}</S.Title>
        </Wrapper>
        </S.Skill>
    );
};
