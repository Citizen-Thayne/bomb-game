import COLORS from './Colors'
import {
  SWAP_BIN_COLORS,
  SPAWN_BOMB,
  SET_BOMB_LIFETIME,
  DETONATE_BOMB
} from './actions'

const INITIAL_BINS = [{
  color: COLORS.BLUE
}, {
  color: COLORS.RED
}, {
  color: COLORS.GREEN
}]

export default (state = {}, action) => {
  const reducer = {
    [SWAP_BIN_COLORS]() {
      var bins = state.bins || INITIAL_BINS
      var firstColor = bins[0].color
      bins[0].color = bins[1].color
      bins[1].color = bins[2].color
      bins[2].color = firstColor
      return {
        ...state,
        bins
      }
    },
    [SPAWN_BOMB]() {
      const {
        bomb
      } = action
      let bombs = state.bombs || {}
      bombs[bomb.id] = bomb
      return {
        ...state,
        bombs
      }
    },
    [SET_BOMB_LIFETIME]() {
      const {
        id,
        lifetime
      } = action
      let bombs = state.bombs || {}
      let bomb = bombs[id]
      if (!bomb) throw new Error("Bomb not found")
      bomb.lifetime = lifetime
      return {
        ...state,
        bombs
      }
    },
    [DETONATE_BOMB]() {
      const {
        id
      } = action
      const {
        bombs
      } = state
      let bomb = bombs[id]
      bomb.isAlive = false
      bomb.didExplode = true
      return {
        ...state,
        bombs
      }
    }
  }[action.type]
  return reducer ? reducer() : state
}