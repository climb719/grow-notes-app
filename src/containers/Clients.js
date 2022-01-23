import Search from '../components/Search';
import React, { useState } from 'react'

const Clients = props => {

    const [btnColor, setBtnColor] = useState("whitesmoke");

    // const changeStyle = () => {
    //     console.log("you just clicked")
        
    // }

    return (
        <div className="clients">
        <h3 className="page-heading">Client Portal</h3>
        <p><button
        onClick={() => {
          btnColor === "whitesmoke" ? setBtnColor("gray") : setBtnColor("whitesmoke")}}
        style={{ backgroundColor: btnColor }} >Add new client...
        </button>
         <Search /> </p>
       
        <ul className= "icons">
        <li><img src="images/001-documents.png" alt="intake forms"/>
        <p className="content">Intake Forms</p></li>
        <li><img src="images/005-mental-health.png" alt="holding heart and mind"/>
        <p className="content">Treatment Plan</p></li>
        <li><img src="images/002-solution.png" alt="mind with puzzle"/>
        <p className="content">Progress Note</p></li>
        <li><img src="images/006-brain.png" alt="heart and brain"/>
        <p className="content">Client Overview</p></li>
        </ul>
       
        </div>
     )
    
}


export default Clients