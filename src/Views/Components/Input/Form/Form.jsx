import React from 'react'
import './Form.css'


const Form = ({...rest}) => {
    return(
        <div>
            
            <input className="form-insert" {...rest} />
        </div>
    )
}
export default Form