import {
  connect
} from 'react-redux'
import BombBinCountdown from '../components/BombBinCountdown';

const mapStateToProps = (state) => ({
  changeIn: state.binSwapCountdown
})

export default connect(mapStateToProps)(BombBinCountdown)