import React, { useState, useEffect } from 'react'
import { ToDoList } from '.';


const ToDO = props => {
    return (
     <div className="ToDO">
     <h3 className="page-heading">On The Docket:</h3>
     <ToDoList />
    
    
     
     </div>
    )
}

export default ToDO