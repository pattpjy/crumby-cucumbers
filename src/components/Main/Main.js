import "./Main.css";
import React, { Component } from "react";
import movieData from "../../movieData";
import Card from "../Card/Card";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.movies);
        this.setState({ destinationData: data.movies });
      })
      .catch((error) => console.log("error", error));
  };

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
  };

  render() {
    return <div className="poster-display">{this.displayMovies()}</div>;
  }
}

export default Main;
