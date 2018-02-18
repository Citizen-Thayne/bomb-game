import React, { Component } from 'react';
import {connect} from 'react-redux'
import {interval} from 'rxjs/observable/interval'
import { sample } from 'rxjs/operators'

import COLORS from '../Colors'
import BombBinContainer from '../containers/BombBinContainer'
import { swapBinColors } from '../actions'
import BombBinCountdown from './BombBinCountdown';

const BIN_CHANGE_INTERVAL = 40

class BombGame extends Component {
  constructor(props) {
    super(props)
    var self = this
    //Initialize bins
    props.dispatch(swapBinColors())

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
  }
  render() {
    return (
      <div className='bomb-game'>
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


export default connect()(BombGame);