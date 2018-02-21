import { connect } from 'react-redux'
import Score from '../components/Score'

const mapStateToProp = ({ score = 0 }) => ({ score })

const ScoreContainer = connect(mapStateToProp)(Score)

export default ScoreContainer
