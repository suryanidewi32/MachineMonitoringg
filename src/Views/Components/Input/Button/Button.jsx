import React from 'react'
import './Button.css'

const Button = ({title, ...rest}) => {
   
    return(
        <div>
            <button className="button button1" {...rest}>{title}</button>
        </div>
        
    )
}
export default Button