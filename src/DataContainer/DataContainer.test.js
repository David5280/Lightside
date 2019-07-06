import React from 'react';
import DataContainer from './DataContainer/'
import { shallow, mount } from 'enzyme';
import peopleData from '../mockData/peopleData';
import vehiclesData from '../mockData/vehiclesData';
import planetsData from '../mockData/planetsData';


describe('DataContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <DataContainer 
      peopleData={peopleData.results} 
      vehicleData={vehiclesData.results} 
      planetData={planetsData.results}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});