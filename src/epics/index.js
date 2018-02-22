import { createEpicMiddleware, combineEpics } from 'redux-observable'

import BinTimerEpic from './BinTimerEpic'
import BombFuseEpic from './BombFuseEpic'
import BombSpawnEpic from './BombSpawnEpic'
import BombDragEpic from './BombDragEpic'
import ScoreEpic from './ScoreEpic'
import GameEndEpic from './GameEndEpic';

const rootEpic = combineEpics(
  BombFuseEpic,
  BinTimerEpic,
  BombSpawnEpic,
  BombDragEpic,
  ScoreEpic,
  GameEndEpic
)


export const epicMiddleware = createEpicMiddleware(rootEpic)