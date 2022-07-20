import './css/text-component.scss'
import React from "react";

export const TextComponent = function ({title, details, index, children}) {
    return (
        <div className='text-component' index={index}>
            <h3><b>{ title }</b></h3>
            {details && <p dangerouslySetInnerHTML={{__html: details}}/>}
            { children }
        </div>
    )
}