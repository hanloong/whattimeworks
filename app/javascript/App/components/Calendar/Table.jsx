import React from 'react'
import Row from './Row'
import ZoneAutoComplete from '../ZoneAutoComplete'
import { TableHeaderColumn } from 'material-ui/Table'

export default ({ actions, zones, calendar }) => {
  return <table>
    <thead>
      <tr>
        {
          zones.map((zone, i) => (
            <TableHeaderColumn key={ zone }>
              <ZoneAutoComplete
                actions={ actions }
                index={ i }
                deletable={ i > 0 }
                value={ zone } />
            </TableHeaderColumn>
          ))
        }
        <th>
          <ZoneAutoComplete
            actions={ actions }
            deletable={ false }
            value={ '' } />
        </th>
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
