import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
function Nav() {
    return ( 
        <div className='nav'>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/dialog'>Massage</NavLink>
            <NavLink to='/Users'>Users</NavLink>
        </div>
     );
}

export default Nav;