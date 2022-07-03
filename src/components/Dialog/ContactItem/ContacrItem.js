import React from 'react';
import {NavLink} from 'react-router-dom'
function ContactItem(props) {
    return ( 
        <div className='dialog__contact'>
            <NavLink to={'/Dialog/${props.id}'}>{props.name}</NavLink>
        </div>
     );
}

export default ContactItem;