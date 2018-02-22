import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators/map'
import { mergeMap } from 'rxjs/operators/mergeMap'
import { takeUntil } from 'rxjs/operators/takeUntil'
import { START_GAME, spawnBomb, GAME_OVER } from '../actions'
import BombSpawnTimerFactory from '../utils/BombSpawnTimerFactory'
import BombFactory from '../utils/BombFactory'

const BombSpawnEpic = action$ =>
  action$.pipe(
    ofType(START_GAME),
    mergeMap(() =>
      BombSpawnTimerFactory().pipe(
        map(() => spawnBomb(BombFactory()))
      )
    ),
    takeUntil(action$.pipe(ofType(GAME_OVER)))
  )

export default BombSpawnEpic
