import React from 'react';
import {shallow} from 'enzyme';
import ShowCard from '../ShowCard';

test('ShowCard renders correctly', () => {
  const component = shallow(
    <ShowCard
      poster="foobar"
      title="Foobar"
      year="1990"
      description="A bar of foo"
    />,
  );
  expect(component).toMatchSnapshot();
});
