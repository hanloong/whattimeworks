import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import Subheader from 'material-ui/Subheader'
import { ListItem } from 'material-ui/List'

class SettingsValidTimes extends Component {
  constructor(props) {
    super(props)

    this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
  }

  handleEndTimeChange(nullEvent, time) {
    this.props.onEndTimeChange(time)
  }

  handleStartTimeChange(nullEvent, time) {
    this.props.onStartTimeChange(time)
  }

  render() {
    return <div>
      <Subheader>Day starts at</Subheader>
      <ListItem>
        <TimePicker
          defaultTime={ this.props.startTime }
          id="startTime"
          onChange={ this.handleStartTimeChange } />
      </ListItem>
      <Subheader>Day ends at</Subheader>
      <ListItem>
        <TimePicker
          defaultTime={ this.props.endTime }
          id="endTime"
          onChange={ this.handleEndTimeChange } />
      </ListItem>
    </div>
  }
}

module.exports = SettingsValidTimes
