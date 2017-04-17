import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import Subheader from 'material-ui/Subheader'
import ListItem from '../ListItem'

const style = {
  subheader: {
    float: 'left',
    paddingLeft: '0',
    width: '40%'
  },
  time: {
    float: 'left',
    width: '60%'
  },
  input: {
    width: '160px'
  }
}

class SettingsValidTimes extends Component {
  constructor(props) {
    super(props)

    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleTimeChange(nullEvent, value) {
    this.props.onChange(value)
  }

  render() {
    let { title, value } = this.props

    return <ListItem>
      <Subheader style={ style.subheader }>{ title }</Subheader>
      <TimePicker
        defaultTime={ value }
        id="startTime"
        onChange={ this.handleTimeChange }
        style={ style.time }
        textFieldStyle={ style.input } />
    </ListItem>
  }
}

module.exports = SettingsValidTimes
