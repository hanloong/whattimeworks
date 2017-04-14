import React from 'react'
import Cell from './Cell'

export default ({ row }) => {
  const classes = row.valid ? 'table-success' : ''

  return <tr className={ classes }>
    {
      row.times.map((row, i) =>
        <Cell
          key={ i }
          time={ row } />
      )
    }
  </tr>
}
