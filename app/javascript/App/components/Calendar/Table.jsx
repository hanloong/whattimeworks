import React from 'react'
import Row from './Row'
import { niceZone } from '../../utils/formatter'

export default ({ zones, calendar }) => {
  return <table
    className='table table-responsive table-bordered table-striped'>
    <thead>
      <tr>
        {
          zones.map((zone, i) => (
            <th key={ i}>
              { niceZone(zone) }
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        calendar.map((row, i) => (
          <Row key={ i } row={ row } />
        ))
      }
    </tbody>
  </table>
}
