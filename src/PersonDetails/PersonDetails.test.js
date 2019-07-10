import React from 'react';
import PersonDetails from './PersonDetails/'
import { shallow } from 'enzyme';

describe('PersonDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <PersonDetails 
      name='Obi Wan'
      birth_year='1994'
      gender='male'
      height='10cm'
      eye_color='red'
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});