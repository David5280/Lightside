import React from 'react';
import NavBar from './NavBar/'
import { shallow, mount } from 'enzyme';

describe('NavBar', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <NavBar />
    )
    expect(wrapper).toMatchSnapshot();
  })
});