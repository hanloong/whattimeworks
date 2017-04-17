import React, { Component } from 'react'
import SettingsMatchesOnly from './Settings/MatchesOnly'
import SettingsValidTimes from './Settings/ValidTimes'
import SettingsValidDays from './Settings/ValidDays'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default ({ state, actions }) => (
  <List>
    <Subheader>Settings</Subheader>
    <SettingsMatchesOnly
      toggled={ state.matchesOnly }
      onToggle={ actions.toggleMatchesOnly } />
    <SettingsValidTimes
      onStartTimeChange={ actions.updateStartTime }
      onEndTimeChange={ actions.updateStartTime }
      startTime={ state.startTime }
      endTime={ state.endTime } />
    <SettingsValidDays
      onUpdate={ actions.updateDays }
      values={ state.validDays } />
  </List>
)
