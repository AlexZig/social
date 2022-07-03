import React from 'react';
import profilrFoto from'../../../img/profilr__foto.png'
function ProfileInfo() {
    return (
        <div className='profile__head'>
            <img src={profilrFoto} alt='profilrFoto' />
            <h2>
                Alex
            </h2>
        </div>
    );
}

export default ProfileInfo;