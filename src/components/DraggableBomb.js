import React from 'react'
import Draggable from 'react-draggable'

import Bomb from './Bomb'

const DraggableBomb = (props) => {
  return (
    <Draggable 
      defaultPosition={{
        x: props.x,
        y: props.y
      }}
      onDrag={props.onDrag}
      onStop={props.onStop}
      id={props.id}
      bounds='parent'>
      <Bomb {...props}></Bomb>
    </Draggable>
  )
}

export default DraggableBomb