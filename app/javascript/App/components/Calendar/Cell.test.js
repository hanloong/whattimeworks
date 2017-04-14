import React from 'react';
import Cell from './Cell';
import renderer from 'react-test-renderer';

test('Print out a table cell', () => {
  const time = { time: 'Today, 3pm', zone: 'Australia/Sydney' }
  const component = renderer.create(
    <Cell time={ time } />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
