import { connect } from 'react-redux'
import BombGame from '../components/BombGame'
import { startGame } from '../actions'

const mapStateToProps = state => ({
  bombs: state.bombs,
  gameDimensions: state.gameDimensions
})
const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(BombGame)
