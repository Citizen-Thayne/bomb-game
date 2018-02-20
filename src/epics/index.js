import { createEpicMiddleware, combineEpics } from 'redux-observable'
import BombEpic from './BombEpic'

const rootEpic = combineEpics(
  BombEpic
)


export const epicMiddleware = createEpicMiddleware(rootEpic)