import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import * as actions from "../context/ActionTypes";
function ResultCard({ movie }) {
  const {MoviesDispatch ,watched,watchlist} = useContext(GlobalContext);
 
  const storedMovie = watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMovieWatched = watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const watchlistDisabeld = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabeld= storedMovieWatched ? true : false;
  return (
    <div className="flex  my-2 justify-center">
      <div className="flex flex-col items-center ">
        {movie.Poster ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-24 h-auto mb-2 rounded"
          />
        ) : (
          <div className="w-24 h-32 flex items-center justify-center bg-gray-300 mb-2">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 w-[70%]  pl-4">
        <h3 className="font-bold text-lg">{movie.Title}</h3>
        {movie.Year ? (
          <p className="text-gray-600">{movie.Year}</p>
        ) : (
          <p className="text-gray-400">-</p>
        )}
        <div className="flex gap-2  ">
          <button
            onClick={() =>
            MoviesDispatch({
                type: actions.ADD_TO_WATCHLIST,
                payload: movie,
              })
            }
           className={`p-1 font-semibold rounded 
    ${watchlistDisabeld
      ? "bg-green-200 cursor-not-allowed opacity-60" 
      : "bg-secondary cursor-pointer"}`}
         disabled={watchlistDisabeld}
          >
            ADD To Watchlist
          </button>
          <button
            onClick={() =>
           MoviesDispatch({
                type:actions.ADD_TO_WATCHED,
                payload: movie,
              })
            }
                className={`p-1 font-semibold rounded 
    ${watchedDisabeld 
      ? "bg-gray-400 cursor-not-allowed opacity-60" 
      : "bg-secondary cursor-pointer"}`}
            disabled={watchedDisabeld}
          >
            ADD To Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
