import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalcontext';
import MovieCard from "./MovieCard";

function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='p-2'>
      <div className="flex justify-around gap-3 items-center">
        <h1 className="font-bold text-2xl">My Watched</h1>
        <span className="bg-secondary rounded-3xl p-2 font-semibold">
          {watched.length}
          {watched.length === 1 ? "movie" : "movies"}
        </span>
      </div>
         {watched.length > 0 ? (
        <div className="grid grid-cols-5 gap-3 my-5 p-5 ">
          {watched.map((movie) => {
            return (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            );
          })}
        </div>
      ) : (
        <h2 className="text-gray-400 font-bold text-3xl text-center my-8">
          No Movies in your list , add some!
        </h2>
      )}
    </div>
  )
}


export default Watched
