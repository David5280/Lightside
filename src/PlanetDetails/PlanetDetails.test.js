import React from 'react';
import PlanetDetails from './PlanetDetails/'
import { shallow } from 'enzyme';

describe('PlanetDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <PlanetDetails 
      name='earth'
      terrain='wet'
      diameter='10 feet'
      population='1'
      favoriteCard={jest.fn()}
      isFavorite ={false}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});