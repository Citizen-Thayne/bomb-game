import React, { Component } from 'react';
import { connect } from 'react-redux'
import { interval } from 'rxjs/observable/interval'

import BombBinContainer from '../containers/BombBinContainer'
import { swapBinColors, spawnBomb } from '../actions'
import BombBinCountdown from './BombBinCountdown';
import DraggableBomb from '../components/DraggableBomb'
import BombSpawnTimerFactory from '../utils/BombSpawnTimerFactory'
import BombFactory from '../utils/BombFactory';


const BIN_CHANGE_INTERVAL = 40

class BombGame extends Component {
  constructor(props) {
    super(props)
    var self = this
    const {
      swapBinColors,
      spawnBomb
    } = props
    //Initialize bins
    swapBinColors()

    this.state = {
      changeIn: BIN_CHANGE_INTERVAL
    }

    const binTimer = interval(1000)
    binTimer.subscribe(val => {
      let changeIn = (BIN_CHANGE_INTERVAL - (val % (BIN_CHANGE_INTERVAL)))
      if(changeIn === BIN_CHANGE_INTERVAL && val) {
        swapBinColors()
      }
      self.setState({changeIn})
    })

    const bombSpawnTimer = BombSpawnTimerFactory()
    bombSpawnTimer.subscribe((val) => {
      spawnBomb(BombFactory())
    })
  }
  render() {
    let { bombs } = this.props
    
    bombs = Object.values(bombs)
      .filter(b => b.isAlive)
      .map((b, i) => <DraggableBomb {...b} key={i}></DraggableBomb>)

    return (
      <div className='bomb-game'>
        {bombs}
        <div className='bomb-bin-row'>
          <BombBinContainer index={0}/>
          <BombBinContainer index={1}/>
          <BombBinContainer index={2}/>
        </div>
        <BombBinCountdown changeIn={this.state.changeIn}></BombBinCountdown>
      </div>
    )
  }
}

const mapStateToProps = (state = {}) => ({bombs: state.bombs || {}})
const mapDispatchToProps = dispatch => ({
  swapBinColors: () => dispatch(swapBinColors()),
  spawnBomb: (bomb) => dispatch(spawnBomb(bomb))
})

export default connect(mapStateToProps, mapDispatchToProps)(BombGame);