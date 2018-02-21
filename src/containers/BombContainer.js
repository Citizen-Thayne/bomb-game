import { connect } from 'react-redux'
import DraggableBomb from '../components/DraggableBomb'

const mapStateToProps = ({ bombs }, { id }) => ({...bombs[id]})
const BombContainer = connect(mapStateToProps)(DraggableBomb)

export default BombContainer
