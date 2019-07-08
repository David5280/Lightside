import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  var wrapper;
  beforeEach(function() {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot with the data being passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should update state when fetchData is invoked', () => {

  //   wrapper.instance().fetchData('people');

  //   expect(wrapper.state('people').length).toEqual(10);
  // });

})
