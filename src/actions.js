export const SWAP_BIN_COLORS = 'SWAP_BIN_COLORS'
export const SPAWN_BOMB = 'SPAWN_BOMB'
export const SET_BOMB_LIFETIME = 'SET_BOMB_LIFETIME'
export const DISARM_BOMB = 'DISARM_BOMB'
export const DETONATE_BOMB = 'DETONATE_BOMB'
export const UPDATE_BOMB_POSITION = 'UPDATE_BOMB_POSITION'

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

export function setBombLifetime(id, lifetime) {
  return {
    type: SET_BOMB_LIFETIME,
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