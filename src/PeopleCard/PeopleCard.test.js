import React from 'react';
import PeopleCard from './PeopleCard/'
import { shallow, mount } from 'enzyme';

describe('PeopleCard', () => {
  it.only('should match the snapshot', () => {
    const wrapper = shallow(
      <PeopleCard 
      personName='Obi Wan'
      birthYear='1994'
      gender='male'
      height='10cm'
      eyeColor='red'
      favoriteCard={jest.fn()}
      isFavorite ={false}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
});