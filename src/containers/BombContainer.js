import { connect } from 'react-redux'
import { updateBombPosition } from '../actions'
import DraggableBomb from '../components/DraggableBomb'

const mapStateToProps = ({ bombs }, { id }) => ({ ...bombs[id] })
const mapDispatchToProps = (dipatch, { id }) => ({
  onStop: (_, { x, y }) => dipatch(updateBombPosition(id, x, y))
})
const BombContainer = connect(mapStateToProps, mapDispatchToProps)(
  DraggableBomb
)

export default BombContainer
