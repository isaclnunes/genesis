/* eslint react/jsx-filename-extension:0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { expect } from 'jest';
import renderer from 'react-test-renderer';
import Link from '../Link';

/* eslint react/jsx-filename-extension:0 */
test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
