import { connect } from 'react-redux'
import GameOver from '../components/GameOver'

const mapStateToProps = ({ gameOver }) => ({
  display: gameOver
})

const GameOverContainer = connect(mapStateToProps)(GameOver)

export default GameOverContainer
