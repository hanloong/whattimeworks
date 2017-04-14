import React, { Component } from 'react'

export default class SettingsMatchesOnly extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange()
  }

  render() {
    let { checked } = this.props

    return <div className='form-check'>
      <label className='form-check-label'>
        <input
          type='checkbox'
          name='matchesOnly'
          className='form-check-input mr-3'
          checked={ checked }
          onChange={ this.handleChange } />
        Only show matching times?
      </label>
    </div>
  }
}
