import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators/mergeMap'
import { timer } from 'rxjs/observable/timer'
import { mapTo } from 'rxjs/operators/mapTo'
import { switchMap } from 'rxjs/operators/switchMap'
import { map } from 'rxjs/operators/map'

import { START_GAME, swapBinColors, updateBinSwapCountdown, GAME_OVER } from '../actions'
import { merge } from 'rxjs/observable/merge'
import { takeUntil } from 'rxjs/operators/takeUntil';

const BIN_CHANGE_INTERVAL = 40

const BinTimerEpic = action$ =>
  action$.pipe(
    ofType(START_GAME),
    mergeMap(() => {
      const timer$ = timer(0, BIN_CHANGE_INTERVAL * 1000)
      const binSwaps$ = timer$.pipe(mapTo(swapBinColors()))
      const countdownUpdates$ = timer$.pipe(
        switchMap(() =>
          timer(0, 1000).pipe(
            map(v => BIN_CHANGE_INTERVAL - v),
            map(v => updateBinSwapCountdown(v))
          )
        )
      )
      return merge(binSwaps$, countdownUpdates$)
    }),
    takeUntil(action$.pipe(ofType(GAME_OVER)))
  )

export default BinTimerEpic
