import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import MovieCard from "./MovieCard";

function WatchedList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="p-2 ">
      <div className="flex justify-around gap-3 items-center">
        <h1 className="font-bold text-2xl">My WatchList</h1>
        <span className="bg-secondary rounded-3xl p-2 font-semibold">
         {watchlist.length}
          {watchlist.length === 1 ? "movie" : "movies"}
        </span>
      </div>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-5 gap-3 my-5 p-5 ">
          {watchlist.map((movie) => {
            return (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            );
          })}
        </div>
      ) : (
        <h2 className="text-gray-400 font-bold text-3xl text-center my-8">
          No Movies in your list , add some!
        </h2>
      )}
    </div>
  );
}

export default WatchedList;
