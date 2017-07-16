import React from 'react';

const MyTitle = props => {
  const style = {color: props.color };
  return (
    <div>
      <h1 style={style}>
        {props.title}
      </h1>
    </div>
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
