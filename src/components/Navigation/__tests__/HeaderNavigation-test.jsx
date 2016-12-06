import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import jest from 'jest';

import HeaderNavigation from '../HeaderNavigation';

describe('HeaderNavigation', () => {

  test('HeaderNavigation renders correctly', () => {
    const component = renderer.create(
      <HeaderNavigation />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
