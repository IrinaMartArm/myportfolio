import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";

export const Logo: React.FC = () => {
    
    return ( 
        <button onClick={()=>{animateScroll.scrollToTop()}}>
            <Icon iconId={'ira'}  width={"110"} height="18"/>
        </button>
    );
}

