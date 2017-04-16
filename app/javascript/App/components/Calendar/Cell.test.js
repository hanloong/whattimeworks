import React from 'react';
import Cell from './Cell';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

test('Print out a table cell', () => {
  const time = { time: 'Today, 3pm', zone: 'Australia/Sydney' }
  const component = renderer.create(
    <MuiThemeProvider>
      <Cell time={ time } />
    </MuiThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
