// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import {object} from 'prop-types';
import {setSearchTerm} from './actionCreators';

class Landing extends React.Component {
  static contextTypes = {
    history: object,
  };
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory,
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>BestFlix</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            value={this.props.searchTerm}
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  serachTerm: state.searchTerm,
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
