// @flow
import React, {Component} from 'react';
import Header from './Header';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: '',
  };
  props: {
    shows: Array<Show>,
  };
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & {target: HTMLInputElement},
  ) => {
    this.setState({searchTerm: event.target.value});
  };
  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        {this.props.shows
          .filter(
            show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
          )
          .map(show => <ShowCard {...show} key={show.imdbID} />)}
      </div>
    );
  }
}

export default Search;
