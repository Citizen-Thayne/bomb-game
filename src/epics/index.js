import { createEpicMiddleware, combineEpics } from 'redux-observable'

import BinTimerEpic from './BinTimerEpic'
import BombFuseEpic from './BombFuseEpic'
import BombSpawnEpic from './BombSpawnEpic'
import BombDragEpic from './BombDragEpic';
import ScoreEpic from './ScoreEpic';

const rootEpic = combineEpics(
  BombFuseEpic,
  BinTimerEpic,
  BombSpawnEpic,
  BombDragEpic,
  ScoreEpic
)


export const epicMiddleware = createEpicMiddleware(rootEpic)