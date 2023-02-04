import "./Main.css";
import React, { Component } from "react";
import movieData from "../../movieData";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      movieId: 0,
    };
  }

  displayMovies = () => {
    const allMovies = this.state.allMovies.map((movie) => {
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

  clickHandler = (event) => {
    const Id = event.target.id;
    console.log(Id);

    this.setState({ movieId: Id });
  };

  render() {
    return <div className="poster-display">{this.displayMovies()}</div>;
  }
}

export default Main;
