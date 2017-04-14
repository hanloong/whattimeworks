import React from 'react'
import Cell from './Cell'

const Row = ({ zones, time}) => {
  let cells = zones.map(zone => 
    <Cell key={ zone } zone={ zone } time={ time }/>
  )

  return <tr>
    { cells }
  </tr>
}

module.exports = Row
