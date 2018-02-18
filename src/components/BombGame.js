import React, { Component } from 'react';
import { connect } from 'react-redux'
import { interval } from 'rxjs/observable/interval'
import { sample } from 'rxjs/operators'

import COLORS from '../Colors'
import BombBinContainer from '../containers/BombBinContainer'
import { swapBinColors, spawnBomb } from '../actions'
import BombBinCountdown from './BombBinCountdown';
import DraggableBomb from '../components/DraggableBomb'

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
    
    const timer = interval(1000)
    timer.subscribe(val => {
      let changeIn = (BIN_CHANGE_INTERVAL - (val % (BIN_CHANGE_INTERVAL)))
      if(changeIn === BIN_CHANGE_INTERVAL && val) {
        self.props.dispatch(swapBinColors())
      }
      self.setState({changeIn})
    })
    timer.subscribe(() => {
      props.spawnBomb()
    })
  }
  render() {
    let { bombs } = this.props
    bombs = bombs.map(b => <DraggableBomb {...b}></DraggableBomb>)

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

const mapStateToProps = (state = {}) => ({bombs: state.bombs || []})
const mapDispatchToProps = dispatch => ({
  swapBinColors: () => dispatch(swapBinColors()),
  spawnBomb: () => dispatch(spawnBomb())
})

export default connect(mapStateToProps, mapDispatchToProps)(BombGame);