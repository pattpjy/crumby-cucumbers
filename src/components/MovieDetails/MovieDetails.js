import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/details/")[1];
  //setting movieId to the hook that return location, this hook return id of the poster
  console.log(movieId);
  const [movieData, setMovieData] = useState({});
  const [hasError, setHasError] = useState(null);
  //useState is return a default of array with empty object(bc our data movie is an single object) ---deconstruct array with 2 elements
  //two elements - 1 empty string and 2 a function that update the value that provided
  useEffect(() => {
    const url =
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/" + movieId;
    async function fetchData() {
      // You can await here

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Unable To Fetch Your Data. Try Later.");
        }
        const json = await response.json();
        console.log(json.movie);
        setMovieData(json.movie);
      } catch (error) {
        setHasError(error.message);
      }
    }
    fetchData();

    // const fetchMovie = () =>
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setMovieData(data.movie));
    // this is causing an infinite loop so we won't use it for now
  }, [movieId]);

  return (
    <div>
      {hasError && (
        <div className="submitErrorMessage">
          <p>
            <strong>{hasError}</strong>
          </p>
        </div>
      )}
      <p>{movieData.title}</p>
      <p>{movieData.overview}</p>
      <p>{movieData.average_rating}</p>
      <img className="poster" src={movieData.poster_path} alt=""></img>
    </div>
  );
};

export default MovieDetails;
