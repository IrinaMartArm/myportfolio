import { Theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    fmin?: number
    fmax?: number
}

export const font = ({family, weight, color, fmin, fmax}: FontPropsType) => `
    font-family: ${family || 'Kalam'};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.white};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px);
` 