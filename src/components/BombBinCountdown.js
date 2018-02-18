import React from 'react'

const BombBinCountdown = ({changeIn}) => {
  return (
    <span className='bomb-bin-countdown'>
      Change in: {changeIn}s
    </span>
  )
}

export default BombBinCountdown