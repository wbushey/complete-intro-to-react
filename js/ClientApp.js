import React from 'react';
import { render } from 'react-dom';
import MyTitle from './MyTitle'

const ce = React.createElement;

const MyFirstComponent = function() {
  return ce('div', null,
      ce(MyTitle, {color: 'rebeccapurple', title: 'Archer'}),
      ce(MyTitle, {color: 'peru', title: 'The Simpsons'}),
      ce(MyTitle, {color: 'burlywood', title: 'The West Wing'})
  );
};

render(
  ce(MyFirstComponent),
  document.getElementById("app")
);
