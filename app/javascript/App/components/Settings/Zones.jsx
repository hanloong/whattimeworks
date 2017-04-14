import moment from 'moment-timezone'
import React, { Component } from 'react'

export default class SettingsZones extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let selected = Array.apply(null, event.target.options).filter(o => o.selected).map(o => o.value)
    this.props.onChange(selected)
  }

  render() {
    let { zones } = this.props

    let zoneOptions = moment.tz.names().map((tz, i) =>
      <option
        key={ i }
        value={ tz }>
        { tz.replace('/', ' - ').replace('_', ' ') }
      </option>
    )

    return <div className='form-group'>
      <label className='label'>
        <h4>Selected zones</h4>
        <select
          className='form-control'
          multiple
          size='10'
          value={ zones }
          onChange={ this.handleChange }>
          { zoneOptions }
        </select>
      </label>
    </div>
  }
}
