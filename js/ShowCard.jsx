import {shape, string} from 'prop-types';
import React from 'react';

const ShowCard = props =>
  <div className="show-card">
    <img
      alt={`${props.title} show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <h3>
      {props.title}
    </h3>
    <h4>
      ({props.year})
    </h4>
    <p>
      {props.description}
    </p>
  </div>;

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};

export default ShowCard;
