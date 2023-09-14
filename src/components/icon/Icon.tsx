import sprite from "./../../assets/images/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Icon = (props: IconPropsType) => {
    return ( 
        <svg  width={props.width} height={props.height}>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    )
}
 