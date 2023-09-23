import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";

export const GoTop = () => {

    const [show, setshow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 300) {
                setshow(true)
            } else {
                setshow(false)
            }
        })
    }, [])

    return (  
        <>
        {show && (
            <GoTopBtn onClick={()=>{animateScroll.scrollToTop()}}>
                <Icon iconId="top" width="30px" height="30px"/>
            </GoTopBtn>)}
        </>     
    );
}

const GoTopBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
`



