import { Component } from "react"
import { Register } from "../../Views/Pages/Pages"


class CRegister extends Component {

    handleRegister = (data) =>{
        console.log("data terakhir", data)

    }


    render(){
    return(
        <Register dataRegister ={(value)=>this.handleRegister(value)}/>
    )
    }
}
export default CRegister