// Модули
import React, { Component } from 'react';

// Компоненты
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import newsApi from './services/news-api';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  // componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });

    // this.setState({ searchQuery: query, currentPage: 1, hits: [] });
    // this.fetchHits();
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    // newsApi.fetchHits(options)
    //   .then(hits => {
    //     this.setState(prevState => ({
    //       hits: [...prevState.hits, ...hits],
    //       currentPage: prevState.currentPage + 1,
    //     })).catch(error => this.setState({error}))
    //   }).finally(() => this.setState({ isLoading: false }));
    newsApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && <h1>Загружаем...</h1>}

        <ImageGallery hits={hits} />

        {shouldRenderLoadMoreButton && <Button onClick={this.fetchHits} />}
      </div>
    );
  }
}

export default App;
