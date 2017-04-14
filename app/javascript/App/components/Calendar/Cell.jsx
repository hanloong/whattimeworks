import React from 'react'

export const Cell = ({ time }) => {
  return <td key={ time.zone }>
    { time.time }
  </td>
}
