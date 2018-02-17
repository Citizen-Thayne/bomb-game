import { createStore } from 'redux'
import bombGame from './reducers'

let store = createStore(bombGame)

export default store
