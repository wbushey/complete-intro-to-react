import React from 'react';

/* @noflow */
const MyTitle = function (props: {
    color: string,
    title: string
  }) {
  return (
    React.createElement('div', null,
      React.createElement('h1', {style: {color: props.color}}, props.title)
    )
  );
}

export default MyTitle;
