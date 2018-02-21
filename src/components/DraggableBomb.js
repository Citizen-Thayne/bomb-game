import React from 'react'
import Draggable from 'react-draggable'

import Bomb from './Bomb'

const DraggableBomb = (props) => {
  const defaultPosition = {
    x: props.initialX,
    y: props.initialY
  }
  return (
    <Draggable
      defaultPosition={defaultPosition}
      // onDrag={props.onDrag}
      // onStop={props.onStop}
      id={props.id}
      bounds="parent"
    >
      <Bomb {...props} />
    </Draggable>
  )
}

export default DraggableBomb
