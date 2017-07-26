// @flow

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setSearchTerm} from './actionCreators';

const Header = (props: {
  showSearch?: boolean,
  searchTerm: string,
  handleSearchTermChange: Function,
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2 className="header-back">
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1><Link to="/">BestFlix</Link></h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = state => ({searchTerm: state.searchTerm});
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
