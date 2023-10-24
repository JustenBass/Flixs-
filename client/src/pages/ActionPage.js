import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function ActionPage() {
    const { renderActionMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
       <br/>
      <div className='genreMovieListGridContainer'>
        { renderActionMovies }
      </div>
    </div>
  )
}
