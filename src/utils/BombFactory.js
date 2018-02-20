import COLORS from '../Colors'
import _ from 'lodash'

let currentId = 1
const getNextId = () => currentId++

const BombFactory = () => ({
  id: getNextId(),
  color: _.sample(Object.values(COLORS)),
  lifetime: _.random(5) + 5,
  isAlive: true,
  didExplode: false
})

export default BombFactory