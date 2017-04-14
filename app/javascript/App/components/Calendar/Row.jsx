import React from 'react'
import { Cell } from './Cell'

export const Row = ({ row }) => (
  <tr>
    {
      row.map(({ zone, time }, i) =>
        <Cell
          key={ i }
          zone={ zone }
          time={ time } />
      )
    }
  </tr>
)
