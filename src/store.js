import {
  createStore,
  applyMiddleware
} from 'redux'
import {
  epicMiddleware
} from './epics'
import bombGame from './reducers'

let store = createStore(
  bombGame,
  applyMiddleware(epicMiddleware)
)

export default store