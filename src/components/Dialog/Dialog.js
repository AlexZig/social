import React from 'react';
import './dialog.css'
import profilrFoto from'../../img/profilr__foto.png'
import DialogItem from './DialogItem/DialogItem';
function Dialog() {
    return ( 
        <div className='dialog'>
            <div className='dialog__list'>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Massage...'/>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Друзья, в день свадьбы будет организована онлайн трансляция выездной регистрации и свадебной речи. Здесь будут выложены цифры для конференции в ZOOM.
                Выездная регистрация - 12:00. Свадебная речь - 15:00 (по местному времени.г.Барнаул). Будем рады видеть каждого из вас!❤️'/>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Друзья, в день свадьбы будет организована онлайн трансляция выездной регистрации и свадебной речи. Здесь будут выложены цифры для конференции в ZOOM.
                Выездная регистрация - 12:00. Свадебная речь - 15:00 (по местному времени.г.Барнаул). Будем рады видеть каждого из вас!❤️'/>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Друзья, в день свадьбы будет организована онлайн трансляция выездной регистрации и свадебной речи. Здесь будут выложены цифры для конференции в ZOOM.
                Выездная регистрация - 12:00. Свадебная речь - 15:00 (по местному времени.г.Барнаул). Будем рады видеть каждого из вас!❤️'/>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Друзья, в день свадьбы будет организована онлайн трансляция выездной регистрации и свадебной речи. Здесь будут выложены цифры для конференции в ZOOM.
                Выездная регистрация - 12:00. Свадебная речь - 15:00 (по местному времени.г.Барнаул). Будем рады видеть каждого из вас!❤️'/>
                <DialogItem profileFoto={profilrFoto} profileName='Alex' postText='Друзья, в день свадьбы будет организована онлайн трансляция выездной регистрации и свадебной речи. Здесь будут выложены цифры для конференции в ZOOM.
                Выездная регистрация - 12:00. Свадебная речь - 15:00 (по местному времени.г.Барнаул). Будем рады видеть каждого из вас!❤️'/>
            </div>
            <div className='dialog__new-massagr new-massagr'>
                <input placeholder='Enter the massage'/>
                <button>Submit</button>
            </div>
        </div>
     );
}

export default Dialog;