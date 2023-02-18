import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/details/")[1];
  const [movieData, setMovieData] = useState({});
  const [hasError, setHasError] = useState(null);
  
  useEffect(() => {
    const url =
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/" + movieId;
    async function fetchData() {

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Unable To Fetch Your Data. Try Later.");
        }
        const json = await response.json();
        setMovieData(json.movie);
      } catch (error) {
        setHasError(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div className="movie-detail">
      {hasError && (
        <div className="submitErrorMessage">
          <p>
            <strong>{hasError}</strong>
          </p>
        </div>
      )}
      <img className="poster" src={movieData.poster_path} alt=""></img>
      <div className="movie-data">
        <h2 className="title">{movieData.title}</h2>
        <p className="overView">{movieData.overview}</p>
        <ul className="data-list">
          <li>Rating: {movieData.average_rating}</li>
          <li>Release Date: {movieData.release_date}</li>
          <li>Genres: {movieData.genres}</li>
          <li>Budget: ${movieData.budget}</li>
          <li>Revenue: ${movieData.revenue}</li>
          <li>Runtime: {movieData.runtime} minutes</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
