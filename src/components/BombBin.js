import React, { Component } from 'react';
import PropTypes from 'prop-types'
import COLORS from '../Colors'



class BombBin extends Component {
  static propTypes = {
    color: PropTypes.oneOf(Object.values(COLORS)).isRequired,
    className: PropTypes.string
  }

  render() {
    const {
      className,
      color
    } = this.props
    let style = {
      backgroundColor: color
    }
    return (
      <div
        style={style}
        className={`bomb-bin ${className}`}
      >
      </div>
    )
  }
}

export default BombBin