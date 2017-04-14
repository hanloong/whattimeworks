import React from 'react'
import Table from './Table'

export default ({ calendar, zones }) => (
  <div className="row">
    <Table
      zones={ zones }
      calendar={ calendar } />
  </div>
)
