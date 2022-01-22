import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { clientNames } from './data';



class Clients extends Component {

  
    

    render() {
     return ( 
        <div className="clients">
        <h3 className="page-heading">Client Forms</h3>
        <ul className= "icons">
        <li><img src="images/001-documents.png" alt="intake forms"/></li>
        <li><img src="images/005-mental-health.png" alt="holding heart and mind"/></li>
        <li><img src="images/002-solution.png" alt="mind with puzzle"/></li>
        <li><img src="images/006-brain.png" alt="heart and brain"/></li>
        </ul>
       
        </div>
     )
    }
}


export default Clients