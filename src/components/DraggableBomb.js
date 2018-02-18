import React from 'react'
import Draggable from 'react-draggable'

import Bomb from './Bomb'

const DraggableBomb = (props) => {
  return (
    <Draggable onStop={props.onStop}>
      <Bomb {...props}></Bomb>
    </Draggable>
  )
}

export default DraggableBomb