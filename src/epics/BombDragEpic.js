import { UPDATE_BOMB_POSITION, disarmBomb, detonateBomb } from '../actions'
import { ofType } from 'redux-observable'
import { filter } from 'rxjs/operators/filter'
import { map } from 'rxjs/operators/map'

const isBombInBin = bomb => bin => {
  const diameter = bomb.diameter
  const bombTop = bomb.y
  const bombBottom = bombTop + diameter
  const bombLeft = bomb.x
  const bombRight = bombLeft + diameter

  const binTop = bin.y
  const binBottom = binTop + bin.size
  const binLeft = bin.x
  const binRight = binLeft + bin.size

  const collided = !(
    bombTop > binBottom ||
    bombRight < binLeft ||
    bombBottom < binTop ||
    bombLeft > binRight
  )
  return collided
}

const BombDragEpic = (action$, store) => {
  return action$.pipe(
    ofType(UPDATE_BOMB_POSITION),
    map(({ id, x, y }) => {
      const { bombs, bins } = store.getState()
      const bomb = bombs[id]
      const targetBin = bins.find(isBombInBin(bomb))
      if (targetBin) {
        if (targetBin.color === bomb.color) {
          return disarmBomb(bomb.id)
        } else {
          return detonateBomb(bomb.id)
        }
      }
    }),
    filter(action => !!action)
  )
}

export default BombDragEpic
