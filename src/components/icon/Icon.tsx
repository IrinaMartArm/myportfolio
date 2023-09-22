import React from "react"
import sprite from "./../../assets/images/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return ( 
        <svg  width={props.width} height={props.height}>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    )
}
