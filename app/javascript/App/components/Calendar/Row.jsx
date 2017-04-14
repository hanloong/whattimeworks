import React from 'react'
import { Cell } from './Cell'

export const Row = ({ row }) => {
  let classes = row.valid ? "table-success" : ""
  
  if (!row.valid) {
    return null
  }

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
