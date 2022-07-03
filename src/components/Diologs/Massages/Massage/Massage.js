import React from 'react'

function Massage(props) {
  return (
    <div className='massage'>
      <img src={props.img} alt='' />
      <div className='massage__content'>
      <h4>
        {props.name}
      </h4>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}
export default Massage;