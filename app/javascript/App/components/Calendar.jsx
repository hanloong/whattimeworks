import React from 'react'
import Table from './Calendar/Table'

export default ({ calendar, zones }) => (
  <div className='row'>
    <Table
      zones={ zones }
      calendar={ calendar } />
  </div>
)
