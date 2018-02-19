import COLORS from '../Colors'
import _ from 'lodash'

const BombFactory = () => ({
  color: _.sample(Object.values(COLORS)),
  lifeTime: _.random(5) + 5
})

export default BombFactory