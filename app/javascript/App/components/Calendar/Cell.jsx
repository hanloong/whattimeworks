import React from 'react'
import { TableRowColumn } from 'material-ui/Table';
import * as colors from 'material-ui/styles/colors'

const style = {
  valid: {
    background: colors.green500,
    color: 'white'
  },
  invalid: {}
}

const Cell = ({ valid, time }) => {
  return <TableRowColumn
    key={ time.zone }
    style={ valid ? style.valid : style.invalid }>
    { time.time }
  </TableRowColumn>
}

module.exports = Cell
