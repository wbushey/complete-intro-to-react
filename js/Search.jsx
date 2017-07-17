import React, {Component} from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'this is a debug statement',
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>BestFlix</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        {preload.shows
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
