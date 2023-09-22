import React from "react";
import { S } from "./WorksStyles";

type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (  
        <S.Work>
            <S.ImgBox>
                <S.Image src={props.image}/>
            </S.ImgBox>
            <S.Box>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
            </S.Box>            
        </S.Work>
    );
}

