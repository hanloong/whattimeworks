import React, { Component } from 'react'
import SettingsMatchesOnly from './Settings/MatchesOnly'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default ({ state, actions }) => (
  <List>
    <Subheader>Settings</Subheader>
    <ListItem>
      <SettingsMatchesOnly
        toggled={ state.matchesOnly }
        onToggle={ actions.toggleMatchesOnly } />
    </ListItem>
  </List>
)
