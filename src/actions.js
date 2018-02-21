export const START_GAME = 'START_GAME'
export const SWAP_BIN_COLORS = 'SWAP_BIN_COLORS'
export const UPDATE_BIN_SWAP_COUNTDOWN = 'UPDATE_BIN_SWAP_COUNTDOWN'
export const SPAWN_BOMB = 'SPAWN_BOMB'
export const UPDATE_BOMB_LIFETIME = 'UPDATE_BOMB_LIFETIME'
export const DISARM_BOMB = 'DISARM_BOMB'
export const DETONATE_BOMB = 'DETONATE_BOMB'
export const UPDATE_BOMB_POSITION = 'UPDATE_BOMB_POSITION'

export function startGame () {
  return {
    type: START_GAME
  }
}

export function updateBinSwapCountdown(remaining) {
  return {
    type: UPDATE_BIN_SWAP_COUNTDOWN,
    remaining
  }
}

export function swapBinColors() {
  return {
    type: SWAP_BIN_COLORS
  }
}

export function spawnBomb(bomb) {
  return {
    type: SPAWN_BOMB,
    bomb
  }
}

export function detonateBomb(id) {
  return {
    type: DETONATE_BOMB,
    id
  }
}

export function disarmBomb(id) {
  return {
    type: DISARM_BOMB,
    id
  }
}

export function updateBombLifetime(id, lifetime) {
  return {
    type: UPDATE_BOMB_LIFETIME,
    id,
    lifetime
  }
}

export function updateBombPosition(id, x, y) {
  return {
    type: UPDATE_BOMB_POSITION,
    id,
    x,
    y,
  }
}