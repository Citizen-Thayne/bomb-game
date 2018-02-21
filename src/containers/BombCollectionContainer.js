import React from 'react'
import { connect } from 'react-redux'
import BombContainer from './BombContainer'

const BombCollection = ({ ids }) =>
  ids.map(id => <BombContainer key={id} id={id} />)
const mapStateToProps = ({ bombs }) => ({
  ids: Object.values(bombs)
    .filter(bomb => bomb.isAlive)
    .map(bomb=> bomb.id)
})
const BombCollectionContainer = connect(mapStateToProps)(BombCollection)

export default BombCollectionContainer
