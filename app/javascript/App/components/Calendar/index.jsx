import React from 'react'
import { Table } from './Table'

export const Calendar = ({ calendar, zones }) => (
  <div className="row">
    <Table
      zones={ zones }
      calendar={ calendar } />
  </div>
)
