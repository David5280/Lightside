import React from 'react';
import VehicleDetails from './VehicleDetails/'
import { shallow } from 'enzyme';

describe('VehicleDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <VehicleDetails 
      name='earth'
      model='wet'
      vehicle_class='10 feet'
      passengers='1'
      favoriteCard={jest.fn()}
      isFavorite ={false}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});