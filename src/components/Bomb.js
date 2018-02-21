import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COLORS from '../Colors'

class Bomb extends Component {
  static propTypes = {
    color: PropTypes.oneOf(Object.values(COLORS)).isRequired,
    lifetime: PropTypes.number.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func
  }
  render() {
    let {
      diameter,
      color,
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      lifetime
    } = this.props
    style = {
      ...style,
      height: diameter + 'px',
      width: diameter + 'px',
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
        <div className="bomb-lifetime">{lifetime}</div>
      </div>
    )
  }
}

export default Bomb
