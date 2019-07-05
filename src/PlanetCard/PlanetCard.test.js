import React from 'react';
import PlanetCard from './PlanetCard/'
import { shallow, mount } from 'enzyme';

describe('PlanetCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <PlanetCard 
      planetName='earth'
      terrain='wet'
      diameter='10 feet'
      population='1'
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});