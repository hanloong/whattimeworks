import React, { Component } from "react";
import SettingsMatchesOnly from "./Settings/MatchesOnly";
import SettingsValidTimes from "./Settings/ValidTimes";
import SettingsValidDays from "./Settings/ValidDays";
import SettingsMinutesSlider from "./Settings/MinutesSlider";
import { List } from "material-ui/List";
import Subheader from "material-ui/Subheader";

export default ({ state, actions }) => (
  <List>
    <Subheader><h2>Settings</h2></Subheader>
    <SettingsMatchesOnly
      onChange={actions.toggleMatchesOnly}
      value={state.matchesOnly}
    />
    <SettingsValidTimes
      onChange={actions.updateStartTime}
      title="Start of day"
      value={state.startTime}
    />
    <SettingsValidTimes
      onChange={actions.updateEndTime}
      title="End of day"
      value={state.endTime}
    />
    <SettingsValidDays onChange={actions.updateDays} value={state.validDays} />
    <SettingsMinutesSlider
      title={"Calendar interval"}
      max={60}
      onChange={actions.updateStep}
      value={state.step}
    />
    <SettingsMinutesSlider
      title={"Meeting length"}
      onChange={actions.updateLength}
      value={state.length}
    />
  </List>
);
