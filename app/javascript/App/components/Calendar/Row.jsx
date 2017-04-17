import React from 'react'
import Cell from './Cell'
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Row = ({ row }) => {
  return <TableRow>
    {
      row.times.map((time, i) =>
        <Cell
          valid={ row.valid }
          key={ i }
          time={ time } />
      )
    }
    <TableRowColumn/>
  </TableRow>
}

module.exports = Row
