// Модули
import React, { Component } from 'react';
import axios from 'axios';

// Компоненты
import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [] });
    this.fetchHits();
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?key=21824668-10aeb8c8af54ec25684dd6884&q=${searchQuery}&page=${currentPage}&image_type=photo&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {hits.map(({ id, webformatURL }) => (
            <li className="ImageGalleryItem" key={id}>
              <img
                src={webformatURL}
                alt=""
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
        </ul>
        {/* <ImageGallery /> */}
        <button type="button" onClick={this.fetchHits}>
          Load more
        </button>
      </div>
    );
  }
}

export default App;
