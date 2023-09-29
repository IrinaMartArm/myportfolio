import React from "react";
import { S } from "./StyleInput";

export const Input: React.FC<{lableText: string, type: 'text', id: string | 'password'}> = (props) => {
    return (  
        <div className="input">
            <input  type={props.type} id={props.id} placeholder={props.lableText}/>
            <label htmlFor={props.id}></label>
        </div>
    );
}





