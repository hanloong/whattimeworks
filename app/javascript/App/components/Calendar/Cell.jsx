import React from 'react'
import { TableRowColumn } from 'material-ui/Table';
import * as colors from 'material-ui/styles/colors'

const style = {
  valid: {
    backgroundColor: colors.cyan50
  },
  invalid: {
    backgroundColor: colors.pink50
  }
}

const Cell = ({ valid, time }) => {
  let days
  if (time.days !== 0) {
    days = time.days > 0 ? `(+${time.days})` : `(-${time.days})`
  }

  return <TableRowColumn
    key={ time.zone }
    style={ time.valid ? style.valid : style.invalid }>
    { time.startTime } - { time.endTime } { days }
  </TableRowColumn>
}

module.exports = Cell
