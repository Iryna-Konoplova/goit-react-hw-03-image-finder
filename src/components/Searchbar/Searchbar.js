// Модули
import React, { Component } from 'react';

// Стили
import styles from '../Searchbar/searchbar.module.css';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
