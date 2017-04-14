import React from 'react'
import moment from 'moment-timezone'
import Row from './Row'

class Table extends React.Component {
  render() {
    let { zones, step, steps, baseZone } = this.props

    let zonesHeading = zones.map(zone => <th key={ zone }>{ zone }</th>)
    let zonesBody = [...Array(steps).keys()].map(i =>
      <Row
        key={ i }
        zones={ zones }
        time={ moment.tz(baseZone).startOf("day").add((i * step), "minutes")} />
    )

    return <table className="table table-responsive table-bordered table-striped">
      <thead>
        <tr>{ zonesHeading }</tr>
      </thead>
      <tbody>
        { zonesBody }
      </tbody>
    </table>
  }
}

module.exports = Table
