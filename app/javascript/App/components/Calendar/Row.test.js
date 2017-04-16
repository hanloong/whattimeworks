import React from 'react';
import Row from './Row';
import renderer from 'react-test-renderer';
import initialState from '../../constants/state'
import getCalendarState from '../../selectors/calendar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

test('Print out a table row', () => {
  let calendar = getCalendarState(initialState)

  const component = renderer.create(
    <MuiThemeProvider>
      <Row row={ calendar[0] } />
    </MuiThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
