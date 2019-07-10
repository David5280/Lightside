import React from 'react';
import VehicleCard from './VehicleCard/'
import { shallow, mount } from 'enzyme';

describe('VehicleCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <VehicleCard 
      vehicleName='car'
      model='cool one'
      vehicleClass='cooooool one'
      passengers='100'
      favoriteCard={jest.fn()}
      isFavorite ={false}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});