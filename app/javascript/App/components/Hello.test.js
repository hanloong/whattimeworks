import React from 'react';
import Hello from './Hello';
import renderer from 'react-test-renderer';

test('Hello prints out a hame', () => {
  const component = renderer.create(
    <Hello />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
