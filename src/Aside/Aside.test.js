import React from 'react';
import Aside from './Aside/';
import filmData from '../mockData/filmData';
import { shallow, mount } from 'enzyme';

describe('Aside', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Aside 
        filmData={filmData.results}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});