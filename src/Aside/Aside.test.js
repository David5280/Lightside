import React from 'react';
import Aside from './Aside/';
import filmData from '../mockData/filmData';
import { shallow } from 'enzyme';

describe('Aside', () => {
  it('should match the snapshot', () => {
    const mockGetRandomFilm = jest.fn().mockImplementation(() => {
      return [{title: 'a', opening_crawl: 'b', release_date: 'c'}]
    }) 
    const wrapper = shallow(
      <Aside 
        filmData={filmData.results}
        getRandomFilm={mockGetRandomFilm}
        />
    )
    expect(wrapper).toMatchSnapshot();
  })
});