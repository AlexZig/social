import React from 'react';
import './profile.css'
import profilrFoto from'../../img/profilr__foto.png'
import PostItem from './PostItem/PostItem';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
function Profile() {
    return ( 
        <div className='profile'>
            <ProfileInfo />
            <Posts />
        </div>
     );
}

export default Profile;