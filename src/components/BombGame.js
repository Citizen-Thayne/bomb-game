import React, { Component } from 'react'
import { Subject } from 'rxjs/Subject'

import BombBinContainer from '../containers/BombBinContainer'
import BombBinCountdownContainer from '../containers/BombBinCountdownContainer'
import BombCollectionContainer from '../containers/BombCollectionContainer'


class BombGame extends Component {
  constructor(props) {
    super(props)
    const { startGame } = props
    startGame()
  }
  render() {
    let { gameDimensions } = this.props
    let style = {
      width: gameDimensions.width,
      height: gameDimensions.height
    }
    return (
      <div className="bomb-game" style={style}>
        <BombCollectionContainer></BombCollectionContainer>
        <div className="bomb-bin-row">
          <BombBinContainer index={0} />
          <BombBinContainer index={1} />
          <BombBinContainer index={2} />
        </div>
        <BombBinCountdownContainer />
      </div>
    )
  }
}

export default BombGame
