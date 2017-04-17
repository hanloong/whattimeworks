import React, { Component } from 'react'
import SettingsMatchesOnly from './Settings/MatchesOnly'
import SettingsValidTimes from './Settings/ValidTimes'
import SettingsValidDays from './Settings/ValidDays'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default ({ state, actions }) => (
  <List>
    <Subheader><h2>Settings</h2></Subheader>
    <SettingsMatchesOnly
      toggled={ state.matchesOnly }
      onToggle={ actions.toggleMatchesOnly } />
    <SettingsValidTimes
      onTimeChange={ actions.updateStartTime }
      time={ state.startTime }
      title='Start of day' />
    <SettingsValidTimes
      onTimeChange={ actions.updateEndTime }
      time={ state.endTime }
      title='End of day' />
    <SettingsValidDays
      onUpdate={ actions.updateDays }
      values={ state.validDays } />
  </List>
)
