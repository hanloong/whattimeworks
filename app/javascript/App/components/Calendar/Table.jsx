import React from 'react'
import { Row } from './Row'

export const Table = ({ zones, calendar }) => {
  return <table className="table table-responsive table-bordered table-striped">
    <thead>
      <tr>
        { zones.map((zone, i) => <th key={ i}>{ zone }</th>) }
      </tr>
    </thead>
    <tbody>
      { calendar.map((row, i) => <Row key={ i } row={ row } />) }
    </tbody>
  </table>
}
