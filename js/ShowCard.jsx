// @flow
import React, {Component} from 'react';
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

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    return (
      <Link to={`/details/${this.props.imdbID}`}>
        <Wrapper>
          <Image
            alt={`${this.props.title} show Poster`}
            src={`/public/img/posters/${this.props.poster}`}
          />
          <h3>
            {this.props.title}
          </h3>
          <h4>
            ({this.props.year})
          </h4>
          <p>
            {this.props.description}
          </p>
        </Wrapper>
      </Link>
    );
  }
}

export default ShowCard;
