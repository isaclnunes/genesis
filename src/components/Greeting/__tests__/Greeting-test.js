import React from 'react';
import {shallow} from 'enzyme';
import Greeting from '../Greeting';

it('Greeting displays correct name', () => {
  // Render a Greeting component in the document
  const greeting = shallow(
    <Greeting name="Tiago" />
  );

  expect(greeting.find('span.greetingText').text()).toEqual('Hello, Tiago!');

  // Render a Greeting component in the document
  const greeting2 = shallow(
    <Greeting name="Manuel" />
  );

  expect(greeting2.find('span.greetingText').text()).toEqual('Hello, Manuel!');
});
