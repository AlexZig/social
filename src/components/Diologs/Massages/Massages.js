import React from 'react'
import Massage from './Massage/Massage'
import Img from '../../../img/about.png'

function Massages() {
  return (
    <div className='massages'>
      <div className='massages__user'>
        <Massage img={Img} name='Alex' text='Test-text'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ipsum culpa exercitationem voluptate libero hic animi! Delectus, error corporis?'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ips error corporis?'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ips error corporis?'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ips error corporis?'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ips error corporis?'/>
        <Massage img={Img} name='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officia nobis et architecto similique provident neque incidunt praesentium, minima velit, in voluptatibus doloribus laboriosam optio est soluta culpa dolor quaerat saepe illum, dolorum consectetur facilis? Quas porro quam quia modi, ips error corporis?'/>
      </div>
      
      <div className='dialogs__managment'>
        <textarea placeholder='massage'/>
        <button type='submit'>
          <i class="fa-solid fa-angle-up"></i>
        </button>
      </div>
    </div>
  )
}
export default Massages