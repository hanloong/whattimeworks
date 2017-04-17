import React, { Component } from 'react'
import ListItem from '../ListItem'
import Toggle from 'material-ui/Toggle'

export default class SettingsMatchesOnly extends Component {
  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.props.onChange()
  }

  render() {
    let { value } = this.props

    return <ListItem>
      <Toggle
        label="Matches only"
        toggled={ value }
        onToggle={ this.handleToggle }/>
    </ListItem>
  }
}
