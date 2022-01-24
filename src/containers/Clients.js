import SearchClients from '../components/SearchClients';
import React, { useState } from 'react'

const Clients = props => {

    const [btnColor, setBtnColor] = useState("whitesmoke");

    // const changeStyle = () => {
    //     console.log("you just clicked")
        
    // }

    return (
        <div className="clients">
        <h3 className="page-heading">Client Portal</h3>
       <button
        onClick={() => {
          btnColor === "whitesmoke" ? setBtnColor("gray") : setBtnColor("whitesmoke")}}
        style={{ backgroundColor: btnColor }} >Add new client...
        </button>
         <SearchClients /> 
        
       
        </div>
     )
    
}


export default Clients