import React from 'react'
import Table from './Calendar/Table'
import Paper from 'material-ui/Paper'

const style = {
  paper: {
    margin: '1em'
  }
}

export default ({ actions, calendar, zones }) => (
  <Paper style={ style.paper }>
    <Table
      actions={ actions }
      zones={ zones }
      calendar={ calendar } />
  </Paper>
)
