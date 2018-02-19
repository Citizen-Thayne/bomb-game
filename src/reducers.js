import _ from 'lodash'

import COLORS from './Colors'
import {
  SWAP_BIN_COLORS,
  SPAWN_BOMB
} from './actions'

const INITIAL_BINS = [{
  color: COLORS.BLUE
}, {
  color: COLORS.RED
}, {
  color: COLORS.GREEN
}]

const getRandomColor = () => {
  var colors = Object.values(COLORS)
  return colors[Math.floor(Math.random() * colors.length)]
}

const getRandomBombLifetime = () => _.random(4, 11)

export default (state = {}, action) => {
  switch (action.type) {
    case SWAP_BIN_COLORS:
      var bins = state.bins || INITIAL_BINS
      var firstColor = bins[0].color
      bins[0].color = bins[1].color
      bins[1].color = bins[2].color
      bins[2].color = firstColor
      return {
        ...state,
        bins
      }
    case SPAWN_BOMB:
      const {
        bomb
      } = action
      let bombs = state.bombs || []
      bombs.push(bomb)
      return {
        ...state,
        bombs
      }
  }
}