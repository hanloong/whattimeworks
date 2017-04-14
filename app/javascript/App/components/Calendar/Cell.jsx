import React from 'react'

const Cell = ({ time, zone }) => (
  <td key={ zone }>
    { time.tz(zone).calendar() }
  </td>
)

module.exports = Cell
