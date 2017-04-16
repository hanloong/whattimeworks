import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle'

export default class SettingsMatchesOnly extends Component {
  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.props.onToggle()
  }

  render() {
    let { toggled } = this.props

    return <Toggle
      label="Matches only"
      toggled={ toggled }
      onToggle={ this.handleToggle }/>
  }
}
