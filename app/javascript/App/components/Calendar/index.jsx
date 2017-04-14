import React from 'react'
import Table from './Table'

const Calendar = ({ zones, sourceZone, step }) => (
  <div className="row">
    <Table
      zones={ [sourceZone, ...zones] }
      step={ step }
      steps={ (24 * 60) / step }
      baseZone={ sourceZone }/>
  </div>
)

export default Calendar
