import React from 'react';
import Row from './Row';
import renderer from 'react-test-renderer';

test('Print out a table cell', () => {
  const row = {
    times: [{
      time: {
        time: 'Today, 3pm',
        zone: 'Australia/Sydney'
      }
    }],
    valid: false
  }

  const component = renderer.create(
    <Row row={ row } />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
