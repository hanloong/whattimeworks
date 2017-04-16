import React from 'react'
import Cell from './Cell'
import { TableRow, TableRowColumn } from 'material-ui/Table';

const style = {
  valid: {
    background: 'green',
    color: 'white'
  },
  invalid: {}
}

const Row = ({ row }) => {
  return <TableRow
    style={ row.valid ? style.valid : style.invalid }>
    {
      row.times.map((row, i) =>
        <Cell
          key={ i }
          time={ row } />
      )
    }
    <TableRowColumn/>
  </TableRow>
}

module.exports = Row
