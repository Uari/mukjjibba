import React from 'react'

export const Box = (props) => {
  return (
    <div className='Box'>
      Box{props.num}
      <p>{props.name}</p>
    </div>
  )
}
