import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'


export default function RomancePage() {
    const { isAuthenticated, userError } = useContext( UserContext )
    const { movies, searchMovieOnChange } = useContext( MovieContext )

    if( isAuthenticated ){
      const romanceMovies = movies.filter((movie) => {
        if( movie.genre === 'Romance' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })
      return (
        <div className='genreMovieListParentDiv'>
          <br/>
        <div className='genreMovieListGridContainer'>
          { romanceMovies.map((movie) => (
            <MovieCard
            key={ movie.id }
            movie={ movie }
            />
            )) }
        </div>
      </div>
      )
    } else {
      return (
        <div className='genreMovieListParentDiv'>
          <h1> { userError } </h1>
        </div>
      )
    }
}
