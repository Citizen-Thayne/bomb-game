import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject'

import BombBinContainer from '../containers/BombBinContainer'
import BombBinCountdownContainer from '../containers/BombBinCountdownContainer';
import DraggableBomb from '../components/DraggableBomb'

class BombGame extends Component {
  constructor(props) {
    super(props)
    const {
      startGame
    } = props
    startGame()
  }
  render() {
    let { bombs } = this.props
    bombs = Object.values(bombs)
      .filter(b => b.isAlive)
      .map((b, i) => <DraggableBomb 
        {...b} 
        key={b.id} 
        // onDrag={(e, data) => this.bombDragSubject$.next({bombId: b.id, ...data})}
      ></DraggableBomb>)
    return (
      <div className='bomb-game'>
        {bombs}
        <div className='bomb-bin-row'>
          <BombBinContainer index={0}/>
          <BombBinContainer index={1}/>
          <BombBinContainer index={2}/>
        </div>
        <BombBinCountdownContainer></BombBinCountdownContainer>
      </div>
    )
  }
}

export default BombGame