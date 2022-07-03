import React from 'react';
function MassageItem(props) {
    return ( 
        <div className='dialog__item'>
            <img src={props.profileFoto} alt='ProfilrFoto'/>
            <div className='dialog__content'>
                <h3>
                    {props.profileName}
                </h3>
                <p>
                    {props.massageText}
                </p>
            </div>
        </div>
     );
}

export default MassageItem;