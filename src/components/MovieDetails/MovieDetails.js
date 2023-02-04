import React from 'react'
import { useLocation } from 'react-router-dom'
import './MovieDetails.css'
import movieData from '../../movieData'


const MovieDetails = () => {
    const location = useLocation()
    const { movieId } = location.state
    console.log(movieId)
    const currentMovie = movieData.movies.find(movie => movie.id === movieId)
    console.log(currentMovie)
    return <div>
        <p>{currentMovie.title}</p>
        <p>{currentMovie.release_date}</p>
        <p>{currentMovie.average_rating}</p>
        <img className='poster' src={currentMovie.poster_path}></img>
    </div>
}

export default MovieDetails