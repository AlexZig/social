import './navbar.css'
import {NavLink} from 'react-router-dom'
function Nav() {
  return (
    <div className="nav">
      <NavLink to='/profile'> Profile</NavLink>
      <NavLink to='/dialogs'> Messages</NavLink>
      <NavLink to='/users'> Users</NavLink>
    </div>
  )
}

export default Nav;