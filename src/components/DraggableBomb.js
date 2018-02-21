import React from 'react'
import Draggable from 'react-draggable'

import Bomb from './Bomb'

const DraggableBomb = props => {
  const { initialX, initialY, onDrag, onStop, id } = props
  return (
    <Draggable
      defaultPosition={{ x: initialX, y: initialY }}
      onDrag={onDrag}
      onStop={onStop}
      id={id}
      bounds="parent"
    >
      <Bomb {...props} />
    </Draggable>
  )
}

export default DraggableBomb
