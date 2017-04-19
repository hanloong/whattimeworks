import React from "react";
import Table from "./Table";
import renderer from "react-test-renderer";
import initialState from "../../constants/state";
import getCalendarState from "../../selectors/calendar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

test("Print out a table", () => {
  let zones = initialState.zones;
  let calendar = getCalendarState(initialState);

  const component = renderer.create(
    <MuiThemeProvider>
      <Table zones={zones} calendar={calendar} />
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
