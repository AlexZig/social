import React from 'react'
import './dialogs.css'
import Massages from './Massages/Massages';
import {NavLink} from 'react-router-dom';
import DialogsItem from './DiologItem/DialogItem';
function Dialogs() {
  return (
    <div className='dialogs'>
      <div className='dialogs__list'>
        <DialogsItem name={'Alex'} id={'1'} />
        <DialogsItem name={'Stiven'} id={'2'} />
      </div>
      <Massages />
    </div>
  )
}

export default Dialogs;