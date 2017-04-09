import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment-timezone';

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zones: []
    }

    this.setZones = this.setZones.bind(this)
  }

  setZones(selected) {
    this.setState({
      zones: selected
    })
  }

  render() {
    const step = 30
    const dailyMinutes = (24 * 60);
    const steps = dailyMinutes / step
    const baseZone = "Australia/Sydney"
    const zones = [baseZone, ...this.state.zones]

    return <div className="container-fluid">
      <div className="row">
        <div className="col">
          <SelectZone
            setZones={ this.setZones } />
        </div>
      </div>
      <div className="row">
        <TimeTable
          zones={ zones }
          step={ step }
          steps={ steps }
          baseZone={ baseZone }/>
      </div>
    </div>
  }
}

class TimeTable extends React.Component {
  render() {
    let { zones, step, steps, baseZone } = this.props

    let zonesHeading = zones.map(zone => <th key={ zone }>{ zone }</th>)
    let zonesBody = [...Array(steps).keys()].map(i =>
      <TimeRow
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

const TimeRow = ({ zones, time}) => {
  let cells = zones.map(zone => 
    <TimeCell key={ zone } zone={ zone } time={ time }/>
  )

  return <tr>{ cells }</tr>
}

const TimeCell = ({ time, zone }) => (
  <td key={ zone }>
    { time.tz(zone).calendar() }
  </td>
)

class SelectZone extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let selected = Array.apply(null, event.target.options).filter(o => o.selected).map(o => o.value)
    this.props.setZones(selected)
  }

  render() {
    let zoneOptions = moment.tz.names().map(tz =>
      <option key={ tz }>{ tz }</option>
    )

    return <select
      multiple
      onChange={ this.handleChange }
      className="form-control">
      { zoneOptions }
    </select>
  }
}

module.exports = Hello;
