
import React from 'react'
import './Link.css'

const Link = ({props,title, ...rest}) => {
    return(
        <div>
             <button to={props.to} className="button-link" {...rest}>{title}</button>
        </div>
    )
}
export default Link