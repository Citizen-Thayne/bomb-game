import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COLORS from '../Colors'

class Bomb extends Component {
  static propTypes = {
    color: PropTypes.oneOf(Object.values(COLORS)).isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
  }
  render() {
    let { color, style, className, onMouseDown, onMouseUp, onTouchStart, onTouchEnd} = this.props
    style = {
      ...style,
      backgroundColor: color
    }
    return (
      <div 
        className={`bomb ${className}`} 
        style={style}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        >
      </div>
    )
  }
}

export default Bomb