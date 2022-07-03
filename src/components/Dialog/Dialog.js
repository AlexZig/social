import React from 'react';
import './dialog.css'
import profilrFoto from'../../img/profilr__foto.png'
import MassageItem from './MassageItem/MassageItem';
import ContactItem from './ContactItem/ContacrItem';

let dialogNames = [
    {name:'Alex Zigan', id:1},
    {name:'Leonid Cosch', id:2},
    {name:'Билл Гейтс', id:3}
];
let dialogItemContent = [
    {massageText:'Сделаем тоже самое с сообщениями.', id:1},
    {massageText:'Им тоже присвоим id.', id:2},
    {massageText:'Готово, полностью это все будет выглядеть вот так', id:3}
]
function Dialog(props) {
    return ( 
        <div className='dialog'>
            <div className='dialog__contact'>
                {dialogNames.map((e)=><ContactItem name = {e.name} id = {e.id}/> ) }
            </div>
            <div className='dialog__massage'>
                <div className='dialog__list'>
                    {dialogItemContent.map((e)=><MassageItem profileFoto={profilrFoto} profileName='Alex' massageText={e.massageText} id={e.id} />)}
                </div>
                <div className='dialog__new-massagr new-massagr'>
                    <input placeholder='Enter the massage'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
     );
}

export default Dialog;