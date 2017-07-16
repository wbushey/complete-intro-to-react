import React from 'react';

const MyTitle = function (props) {
  return (
    React.createElement('div', null,
      React.createElement('h1', {style: {color: props.color}}, props.title)
    )
  );
}

MyTitle.propTypes = {
  color: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
}

MyTitle.defaultProps = {
  color: 'black'
}

export default MyTitle;
