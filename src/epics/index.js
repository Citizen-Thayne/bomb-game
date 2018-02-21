import { createEpicMiddleware, combineEpics } from 'redux-observable'

import BinTimerEpic from './BinTimerEpic'
import BombFuseEpic from './BombFuseEpic'
import BombSpawnEpic from './BombSpawnEpic'
import BombDragEpic from './BombDragEpic';

const rootEpic = combineEpics(
  BombFuseEpic,
  BinTimerEpic,
  BombSpawnEpic,
  BombDragEpic
)


export const epicMiddleware = createEpicMiddleware(rootEpic)