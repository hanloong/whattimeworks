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
  let days
  if (time.days !== 0) {
    days = time.days > 0 ? `(+${time.days})` : `(-${time.days})`
  }
  return <TableRowColumn
    key={ time.zone }
    style={ valid ? style.valid : style.invalid }>
    { time.startTime } - { time.endTime } { days }
  </TableRowColumn>
}

module.exports = Cell
