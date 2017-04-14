import React, { Component } from 'react'
import moment from 'moment-timezone'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let selected = Array.apply(null, event.target.options).filter(o => o.selected).map(o => o.value)
    this.props.updateZones(selected)
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
