import React from 'react'

export default ({ time }) => {
  return <td key={ time.zone }>
    { time.time }
  </td>
}
