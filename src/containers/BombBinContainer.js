import { connect } from 'react-redux'

import BombBin from '../components/BombBin'

const mapStateToProps = ({bins}, {index}) => {
  return {
    color: bins[index].color
  }
}

const BombBinContainer = connect(
  mapStateToProps
)(BombBin)

export default BombBinContainer