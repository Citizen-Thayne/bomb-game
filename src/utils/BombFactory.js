import COLORS from '../Colors'
import _ from 'lodash'

let currentId = 1
const getNextId = () => currentId++

const BombFactory = () => ({
  id: getNextId(),
  color: _.sample(Object.values(COLORS)),
  lifetime: _.random(5) + 5,
  initialX: _.random(700),
  initialY: _.random(450),
  diameter: 100,
  isAlive: true,
  didExplode: false
})

export default BombFactory