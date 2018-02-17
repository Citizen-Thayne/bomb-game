import COLORS from './Colors'
import {
  SWAP_BIN_COLORS
} from './actions'

const INITIAL_BINS = [{
  color: COLORS.BLUE
}, {
  color: COLORS.RED
}, {
  color: COLORS.GREEN
}]

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
  }
}