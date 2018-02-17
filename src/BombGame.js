import React, { Component } from 'react';
import COLORS from './Colors'
import BombBin from './BombBin'

class BombGame extends Component {
  render() {
    return (
      <div className='bomb-game'>
        <div className='bomb-bin-row'>
          <BombBin color={COLORS.RED}></BombBin>
          <BombBin color={COLORS.BLUE}></BombBin>
          <BombBin color={COLORS.GREEN}></BombBin>
        </div>
      </div>
    )
  }
}

export default BombGame;