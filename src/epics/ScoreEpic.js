import { ofType, combineEpics } from 'redux-observable'
import { mergeMap } from 'rxjs/operators/mergeMap'
import { merge } from 'rxjs/operators/merge'
import { map } from 'rxjs/operators/map'
import { mapTo } from 'rxjs/operators/mapTo'
import { tap } from 'rxjs/operators/tap'

import {
  DISARM_BOMB,
  incrementScore,
  DETONATE_BOMB,
  decrementScore,
  INCREMENT_SCORE
} from '../actions'



const ScoreUpEpic = action$ =>
  action$.pipe(
    ofType(DISARM_BOMB), 
    mapTo(incrementScore())
  )

const ScoreDownEpic = (action$, { getState }) => 
  action$.pipe(
    ofType(DETONATE_BOMB),
    mapTo(decrementScore())
  )

const ScoreEpic = combineEpics(ScoreUpEpic, ScoreDownEpic)

export default ScoreEpic
