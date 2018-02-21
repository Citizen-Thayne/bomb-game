import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COLORS from '../Colors'

class BombBin extends Component {
  static propTypes = {
    color: PropTypes.oneOf(Object.values(COLORS)).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    className: PropTypes.string
  }

  render() {
    const { className, color, x, y, size } = this.props
    let style = {
      position: 'absolute',
      backgroundColor: color,
      transform: `translate(${x}px, ${y}px)`,
      height: size + 'px',
      width: size + 'px'
    }
    return <div style={style} className={`bomb-bin ${className || ''}`} />
  }
}

export default BombBin
