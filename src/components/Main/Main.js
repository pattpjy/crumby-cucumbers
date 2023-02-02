import './Main.css'
import React, { Component } from 'react'
import movieData from '../../movieData'
import Card from '../Card/Card'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            movies: movieData
        }
    }

    displayMovies() {
        const allMovies = this.state.movies.movies.map(movie => {
            return <Card poster={movie.poster_path} key={movie.id}/>
        })
        return allMovies
    }

    render() {
        return(
            <div>
                {this.displayMovies()}
            </div>
        )
    }
}

export default Main