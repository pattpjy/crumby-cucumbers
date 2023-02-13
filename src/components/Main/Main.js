import "./Main.css";
import React, { Component } from "react";
import Card from "../Card/Card";
import SearchBar from "../Search/SearchBar";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      visibleMovies: [],
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable To Fetch Your Data. Try Later.");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ allMovies: data.movies, visibleMovies: data.movies });
      })
      .catch((error) => this.setState({ hasError: error.message }));
  };

  clickHandler = (event) => {
    const Id = event.target.id;
  };

  clearSearchResult = () => {
    this.setState({ visibleMovies: this.state.allMovies });
  };

  displayMovies = () => {
    const allMovies = this.state.visibleMovies.map((movie) => {
      return (
        <Card
          poster={movie.poster_path}
          id={movie.id}
          key={movie.id}
          alt={movie.title}
          handleClick={this.clickHandler}
        />
      );
    });
    return allMovies;
  };

  displaySearch = (searchInput) => {
    const searchMovies = this.state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ visibleMovies: searchMovies });
  };

  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar
            searchMovies={this.displaySearch}
            clearSearchResult={this.clearSearchResult}
          />
        </div>
        <div className="poster-display">
          {this.state.hasError && (
            <div className="submitErrorMessage">
              <p>
                <strong>{this.state.hasError}</strong>
              </p>
            </div>
          )}
          {this.displayMovies()}
        </div>
      </div>
    );
  }
}

export default Main;
