import React from 'react'
import { NavLink} from 'react-router-dom'
import '../css/Snav.css';
import { useAuth } from './auth';
function Navlink() {
   const auth=useAuth()
  return (
    <div>
      <nav>
        <NavLink  to='/' exact className="navlink" activeClassName="active">home</NavLink>
        <NavLink to='/about' className="navlink" activeClassName="active">about</NavLink>
        <NavLink to='/products' className="navlink" activeClassName="active">products</NavLink>
        <NavLink to='/users' className="navlink" activeClassName="active">users</NavLink>
        <NavLink to='/profile' className="navlink" activeClassName="active">profile</NavLink>
        {!auth.user&&(
          <NavLink to='/login' className="navlink" activeClassName="active">login</NavLink>
        )}
      </nav>
    </div>
  )
}

export default Navlink