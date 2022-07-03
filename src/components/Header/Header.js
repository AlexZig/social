import React from 'react';
import './header.css'
import logo from '../../img/logo.svg'
function Header() {
    function handleClick () {
        const body = document.body;
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            body.style.setProperty('--colorBG', '#f7f7f7');
            body.style.setProperty('--colorText', '#222222');
            body.style.setProperty('--color1', 'rgb(1, 68, 212)');
            body.style.setProperty('--color2', 'rgb(0, 210, 218)');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            body.style.setProperty('--colorBG', '#222222');
            body.style.setProperty('--colorText', '#f7f7f7');
            body.style.setProperty('--color1', 'rgb(0, 39, 122)');
            body.style.setProperty('--color2', 'rgb(0, 61, 63)');
        }
    }
    return (
        <div className='header'>
            <img src={logo} alt='profilrFoto' />
            <button id='lightTheme' onClick={handleClick}>light theme</button>
        </div>
    );
}

export default Header;
