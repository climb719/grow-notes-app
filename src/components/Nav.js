import React from 'react'
import { Link } from "react-router-dom"

const Nav = props => {
    return (
     <div className="nav-bar">
     <ul>
      <li><Link end to="/"><div className='link'>Home</div></Link></li>
      <li><Link end to="/scheduling"><div className='link'>Scheduling</div></Link></li>
      <li><Link to="/toDo"><div className='link'>To Do</div></Link></li>
      <li><Link to="/resources"><div className='link'>Resources</div></Link></li>
      <li><Link to="/clients"><div className='link'>Clients</div></Link></li>
     </ul>

      </div>
      )
    }
    
export default Nav;