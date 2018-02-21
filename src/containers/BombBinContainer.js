import { connect } from 'react-redux'

import BombBin from '../components/BombBin'

const mapStateToProps = ({ bins }, { index }) => {
  const bin = [...bins][index]
  return {...bin}
}

const BombBinContainer = connect(mapStateToProps)(BombBin)

export default BombBinContainer
