import React from 'react';
import Header from './Header'
import {shallow, mount} from 'enzyme';

describe('Header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Header 
        favoritesLength = {2}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});