import COLORS from './Colors'
import {
  SWAP_BIN_COLORS,
  SPAWN_BOMB,
  UPDATE_BOMB_LIFETIME,
  DETONATE_BOMB,
  UPDATE_BOMB_POSITION,
  DISARM_BOMB,
  UPDATE_BIN_SWAP_COUNTDOWN,
  UPDATE_BIN_SIZE,
  DECREMENT_SCORE,
  INCREMENT_SCORE
} from './actions'

const BIN_SWAP_INTERVAL = 40

const DEFAULT_STATE = {
  gameDimensions: {
    width: 800,
    height: 800
  },
  binSwapCountdown: BIN_SWAP_INTERVAL,
  bins: [
    {
      color: COLORS.BLUE,
      size: 100,
      y: 600,
      x: 150
    },
    {
      color: COLORS.RED,
      size: 100,
      y: 600,
      x: 350
    },
    {
      color: COLORS.GREEN,
      size: 100,
      y: 600,
      x: 550
    }
  ],
  bombs: {}
}

export default (state = DEFAULT_STATE, action) => {
  const reducer = {
    [UPDATE_BIN_SWAP_COUNTDOWN]() {
      return {
        ...state,
        binSwapCountdown: action.remaining
      }
    },
    [SWAP_BIN_COLORS]() {
      var bins = [...state.bins]
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
      const { bomb } = action
      let bombs = { ...state.bombs }
      bombs[bomb.id] = bomb
      return {
        ...state,
        bombs
      }
    },
    [UPDATE_BOMB_LIFETIME]() {
      const { id, lifetime } = action
      let bombs = { ...state.bombs }
      let bomb = bombs[id]
      if (!bomb) throw new Error('Bomb not found')
      bomb.lifetime = lifetime
      return {
        ...state,
        bombs
      }
    },
    [DISARM_BOMB]() {
      const { id } = action
      let bombs = { ...state.bombs }
      let bomb = bombs[id]
      if (bomb.isAlive) {
        bomb.isAlive = false
        bomb.didExplode = false
      }
      return {
        ...state,
        bombs
      }
    },
    [DETONATE_BOMB]() {
      const { id } = action
      let bombs = { ...state.bombs }
      let bomb = bombs[id]
      if (bomb.isAlive) {
        bomb.isAlive = false
        bomb.didExplode = true
      }
      return {
        ...state,
        bombs
      }
    },
    [UPDATE_BOMB_POSITION]() {
      const { x, y, id } = action
      let { bombs } = state
      let bomb = bombs[id]
      bomb.x = x
      bomb.y = y

      return {
        ...state,
        bombs
      }
    },
    [UPDATE_BIN_SIZE]() {
      const { id, size } = action
      const bins = { ...state.bins }
      bins[id].size = size
      return { ...state, bins }
    },
    [DECREMENT_SCORE]() {
      const { score = 0 } = state
      return {
        ...state,
        score: score - 1
      }
    },
    [INCREMENT_SCORE]() {
      const { score = 0 } = state
      return {
        ...state,
        score: score + 1
      }
    }
  }[action.type]
  return reducer ? reducer() : state
}
