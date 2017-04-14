import React, { Component } from 'react'
import moment from 'moment-timezone'
import { Link } from 'react-router-dom'
import SettingsMatchesOnly from './Settings/MatchesOnly'

export default class Settings extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let selected = Array.apply(null, event.target.options).filter(o => o.selected).map(o => o.value)
    this.props.actions.updateZones(selected)
  }

  render() {
    let zoneOptions = moment.tz.names().map(tz =>
      <option key={ tz }>{ tz }</option>
    )

    return <div className='container'>
      <div className='row pt-5 justify-content-md-center'>
        <div className='col col-lg-6'>
          <form>
            <h1 className='pb-2'>Settings</h1>
            <SettingsMatchesOnly
              checked={ this.props.state.matchesOnly }
              onChange={ this.props.actions.toggleMatchesOnly } />
            <div className='form-group'>
              <select
                className='form-control'
                multiple
                onChange={ this.handleChange }>
                { zoneOptions }
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
}
