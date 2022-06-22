import React from 'react';

function PostItem(props) {
    return ( 
        <div className='posts__item'>
            <img src={props.profileFoto} alt='ProfilrFoto'/>
            <h3>
                {props.profileName}
            </h3>
            <p>
                {props.postText}
            </p>
        </div>
     );
}

export default PostItem;