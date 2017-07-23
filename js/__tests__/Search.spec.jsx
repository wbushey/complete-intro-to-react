import React from 'react';
import {shallow} from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';
import Header from '../Header';

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house';
  const component = shallow(<Search shows={preload.shows} />);
  component
    .find(Header)
    .dive()
    .find('input')
    .simulate('change', {target: {value: searchWord}});
  const showCount = preload.shows.filter(show =>
    `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(
      searchWord.toUpperCase(),
    ),
  ).length;
  expect(showCount).toEqual(component.find(ShowCard).length);
});
