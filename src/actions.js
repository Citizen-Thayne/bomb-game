export const SWAP_BIN_COLORS = 'SWAP_BIN_COLORS'
export const SPAWN_BOMB = 'SPAWN_BOMB'

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