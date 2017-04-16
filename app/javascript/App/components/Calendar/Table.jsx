import React from 'react'
import Row from './Row'
import ZoneAutoComplete from '../ZoneAutoComplete'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'

export default ({ actions, zones, calendar }) => {
  return <Table selectable={ false }>
    <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
      <TableRow>
        {
          zones.map((zone, i) => (
            <TableHeaderColumn key={ zone }>
              <ZoneAutoComplete
                actions={ actions }
                index={ i }
                deletable={ i > 1 }
                value={ zone } />
            </TableHeaderColumn>
          ))
        }
        <TableHeaderColumn>
          <ZoneAutoComplete
            actions={ actions }
            deletable={ zones.length > 1 }
            value={ '' } />
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        calendar.map((row, i) => (
          <Row key={ i } row={ row } />
        ))
      }
    </TableBody>
  </Table>
}
