import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import Subheader from 'material-ui/Subheader'
import { ListItem } from 'material-ui/List'

class SettingsValidTimes extends Component {
  constructor(props) {
    super(props)

    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleTimeChange(nullEvent, time) {
    this.props.onTimeChange(time)
  }

  render() {
    let { title, time } = this.props

    return <div>
      <Subheader>{ title }</Subheader>
      <ListItem>
        <TimePicker
          defaultTime={ time }
          id="startTime"
          onChange={ this.handleTimeChange } />
      </ListItem>
    </div>
  }
}

module.exports = SettingsValidTimes
