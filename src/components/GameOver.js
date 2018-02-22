import React from 'react'

const GameOver = ({ display }) => {
  let className = 'game-over'
  className += display ? '' : ' hidden'
  return <span className={className}>Game Over</span>
}

export default GameOver
