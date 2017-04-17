import React, { Component } from 'react'
import SettingsMatchesOnly from './Settings/MatchesOnly'
import SettingsValidTimes from './Settings/ValidTimes'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default ({ state, actions }) => (
  <List>
    <Subheader>Settings</Subheader>
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
  </List>
)
