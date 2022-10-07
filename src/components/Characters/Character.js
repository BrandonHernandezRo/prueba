import React from 'react'

const Character = (props) => {

  return (
    <div>
        <p>{props.item.name}</p>
        <p>{props.item.height}</p>
        <p>{props.item.skin_color}</p>
    </div>
  )
}

export default Character