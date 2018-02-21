import {
  interval
} from 'rxjs/observable/interval'
import {
  map,
  mapTo,
  scan,
  mergeMap,
  takeWhile
} from 'rxjs/operators'
import {
  ofType
} from 'redux-observable'
import {
  updateBombLifetime,
  detonateBomb,
  SPAWN_BOMB
} from '../actions';

const BombFuseEpic = action$ =>
  action$.pipe(
    ofType(SPAWN_BOMB),
    mergeMap(({
      bomb
    }) => interval(1000).pipe(
      mapTo(-1),
      scan((acc, curr) => curr ? curr + acc : acc, bomb.lifetime),
      takeWhile(v => v >= 0),
      map(val => val ? updateBombLifetime(bomb.id, val) : detonateBomb(bomb.id))
    ))
  )

export default BombFuseEpic