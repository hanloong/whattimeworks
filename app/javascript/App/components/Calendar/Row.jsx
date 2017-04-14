import React from 'react'
import Cell from './Cell'

const Row = ({ zones, time}) => (
  <tr>
    {
      zones.map(zone =>
        <Cell
          key={ zone }
          zone={ zone }
          time={ time } />
      )
    }
  </tr>
)

module.exports = Row
