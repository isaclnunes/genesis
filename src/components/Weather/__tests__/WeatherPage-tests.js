/* eslint import/no-extraneous-dependencies: 0  */
/* eslint import/imports-first: 0  */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-undef: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../Weather';

function setup() {
  const props = {
    weather: {
      city: {
        coord: {
          lat: '00001',
          lon: '00002',
        },
        name: 'Dummy City',
        country: 'UK'
      },
      list: []
    }
  };

  const enzymeWrapper = shallow(<Weather {...props.weather} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Weather', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div').hasClass('container')).toBe(true);

      expect(enzymeWrapper.find('h1').text()).toBe('Current weather in Dummy City, UK');

      const linkProps = enzymeWrapper.find('Link').props();
      expect(linkProps.to).toBe('http://maps.google.com/maps?q=00001,00002');
    });
  });
});
