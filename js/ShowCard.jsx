// @flow
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: Show) => (
  <Link to={`/details/${props.imdbID}`}>
    <Wrapper>
      <Image
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
    </Wrapper>
  </Link>
);

export default ShowCard;
