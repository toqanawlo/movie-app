import axios from "axios";
import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=124cc3a6`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
          console.log(res.data.Search);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchValue]);
  return (
    <>
      <input
        type="text"
        placeholder="Search for a movie"
        className="bg-primary p-3 my-8 rounded-lg w-[50%] text-white mx-auto block"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="flex justify-center ">
        {movies.length > 0 && (
          <ul className="">
            {movies.map((movie) => (
              <li key={movie.imdbID} className="">
                {<ResultCard movie={movie} />}
              </li>
            ))}
          </ul>
        )}{" "}
      </div>{" "}
    </>
  );
}
export default Add;
