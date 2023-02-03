import "./Main.css";
import React, { Component } from "react";
import movieData from "../../movieData";
import Card from "../Card/Card";
import { Route, Link, Switch } from 'react-router-dom';
import MovieDetails from "../MovieDetails/MovieDetails";



class Main extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData,
    };
  }

  displayMovies() {
    const allMovies = this.state.allMovies.movies.map((movie) => {
      return <Card
      poster={movie.poster_path} 
      id={movie.id} 
      key={movie.id} 
      alt={movie.title}
      />;
    });
    return allMovies;
  }

  render() {
    return <div className="poster-display">{this.displayMovies()}</div>;
  }
}

export default Main;
