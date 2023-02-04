import "./Main.css";
import React, { Component } from "react";
// import movieData from "../../movieData";
import Card from "../Card/Card";

class Main extends Component {

  constructor() {
    super();
    this.state = {
      allMovies: [],
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
        console.log(data.movies);
        this.setState({ allMovies: data.movies });
      })
      .catch((error) => this.setState({ hasError: error.message }));
  };

  clickHandler = (event) => {
    const Id = event.target.id;
    console.log(Id);
  };

  render() {
    return (
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
    );
  }
}

export default Main;
