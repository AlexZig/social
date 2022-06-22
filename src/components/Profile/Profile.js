import React from 'react';
import './profile.css'
import profilrFoto from'../../img/profilr__foto.png'
import PostItem from './PostItem/PostItem';
function Profile() {
    return ( 
        <div className='profile'>
            <div className='profile__head'>
                <img src={profilrFoto} alt='profilrFoto'/>
                <h2>
                    Alex
                </h2>
            </div>
            <div className='profile__post posts'>
                <div className='posts__head'>
                    <h3>
                        My Posts
                    </h3>
                    <input placeholder='Enter the o
                    post'/>
                    <button>Add Post</button>
                </div>    
                <div className='posts__list'>
                    <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...'/>
                    <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...'/>
                    <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...'/>
                </div> 
            </div>
        </div>
     );
}

export default Profile;