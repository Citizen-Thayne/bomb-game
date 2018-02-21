import { createEpicMiddleware, combineEpics } from 'redux-observable'

import BinTimerEpic from './BinTimerEpic'
import BombFuseEpic from './BombFuseEpic'
import BombSpawnEpic from './BombSpawnEpic'

const rootEpic = combineEpics(
  BombFuseEpic,
  BinTimerEpic,
  BombSpawnEpic
)


export const epicMiddleware = createEpicMiddleware(rootEpic)