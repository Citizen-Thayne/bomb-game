import React, { Component } from 'react';
import {connect} from 'react-redux'
import {interval} from 'rxjs/observable/interval'

import COLORS from '../Colors'
import BombBinContainer from '../containers/BombBinContainer'
import { swapBinColors } from '../actions'


class BombGame extends Component {
  componentWillMount() {
    //Initialize bins
    this.props.dispatch(swapBinColors())

    const binSwapIntervalSource = interval(40000)
    binSwapIntervalSource.subscribe(() => this.props.dispatch(swapBinColors()))
  }
  render() {
    return (
      <div className='bomb-game'>
        <div className='bomb-bin-row'>
          <BombBinContainer index={0}/>
          <BombBinContainer index={1}/>
          <BombBinContainer index={2}/>
        </div>
      </div>
    )
  }
}


export default connect()(BombGame);