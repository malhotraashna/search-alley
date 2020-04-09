import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 2AnRDO7sTR0hpHKUzNYW5OsResHajE-eFP9YPcayn-E',
      },
    });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
