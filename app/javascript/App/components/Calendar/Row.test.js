import React from 'react';
import Row from './Row';
import renderer from 'react-test-renderer';
import initialState from '../../constants/state'
import getCalendarState from '../../selectors/calendar'


test('Print out a table cell', () => {
  let calendar = getCalendarState(initialState)

  const component = renderer.create(
    <Row row={ calendar[0] } />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
