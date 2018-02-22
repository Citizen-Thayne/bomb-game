import { ofType } from 'redux-observable'
import { SPAWN_BOMB, gameOver } from '../actions'
import { take } from 'rxjs/operators/take'
import { tap } from 'rxjs/operators/tap'
import { mapTo } from 'rxjs/operators/mapTo'
import { filter } from 'rxjs/operators/filter'
import { concat } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { from } from 'rxjs/observable/from'
import { interval } from 'rxjs/observable/interval';
import { last } from 'rxjs/operators/last';

const GameEndEpic = action$ =>
  action$.pipe(
    ofType(SPAWN_BOMB),
    take(120),
    concat(of(gameOver())),
    last()
)

export default GameEndEpic