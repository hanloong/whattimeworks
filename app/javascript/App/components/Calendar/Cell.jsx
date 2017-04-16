import React from 'react'

import { TableRowColumn } from 'material-ui/Table';

const Cell = ({ time }) => {
  return <TableRowColumn key={ time.zone }>
    { time.time }
  </TableRowColumn>
}

module.exports = Cell
