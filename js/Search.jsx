// @flow
import React from 'react';
import {connect} from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>,
}) => (
  <div className="search">
    <Header showSearch />
    {props.shows
      .filter(
        show =>
          `${show.title} ${show.description}`
            .toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0,
      )
      .map((show, index) => (
        <ShowCard {...show} key={show.imdbID} id={index} />
      ))}
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(Search);
