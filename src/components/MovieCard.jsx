// MovieCard.jsx
import React from 'react'
import MovieControls from './MovieControls'

function MovieCard({ movie, type }) {
  return (
    <div className="relative w-60 mb-4 group hover:border-secondary hover:border-2 rounded"> 
      <div className="overflow-hidden rounded">
        {movie.Poster ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-auto rounded transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}

 
        <div className="absolute bottom-8 left-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MovieControls movie={movie} type={type} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
