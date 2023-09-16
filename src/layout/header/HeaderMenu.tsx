import styled from "styled-components";

export const HeaderMenu = (props:{items: Array<string>}) => {
    return ( 
        <StyledHeaderMenu>
            <ul>
                {props.items.map((i, index)=>{
                    return  <MenuItem key={index}>
                                <Link href="">
                                    {i}
                                    <Mask>
                                        <span>{i}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{i}</span>
                                    </Mask>
                                </Link>
                            </MenuItem>})}
            </ul>
        </StyledHeaderMenu>
    );
}
const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }
`

const Link = styled.a`
    text-align: center;
    font-family: Kalam;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.2;
    color: transparent;
` 
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: #A0B05D;
    display: inline-block;
    height: 50%;
    overflow: hidden;

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%)
        }
    }
`
const MenuItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: #A0B05D;
        position: absolute;
        top: 48%;
        left: -10px;
        right: -10px;
        z-index: 2;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(5deg) translateX(1px);
            color: white;
            & +  ${Mask} {
                transform: skewX(12deg) translateX(-1px);
            }
        }
    }
` 