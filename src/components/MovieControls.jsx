// MovieControls.jsx
import React, { useContext } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from '../context/Globalcontext';
import * as actions from "../context/ActionTypes"
function MovieControls({ movie, type }) {
    const {MoviesDispatch}=useContext(GlobalContext)
  return (
    <div className="flex gap-3 bg-black/50 p-2 rounded">
      {type === "watchlist" && (
        <>
          <button className="text-white hover:text-secondary"
          onClick={()=>MoviesDispatch({
            type:actions.ADD_TO_WATCHED,
            payload:movie
          }) }>
            <FaEye size={20} />
          </button>
          <button className="text-white hover:text-red-500"
          onClick={()=> MoviesDispatch({
            type:actions.REMOVE_FROM_WATCHLIST,
            payload:movie.imdbID
          })}>
            <AiOutlineClose size={20} />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="text-white hover:text-secondary" onClick={()=> MoviesDispatch({
            type:actions.MOVE_TO_WATCHLIST,
            payload:movie
          })}>
            <FaEyeSlash size={20} />
          </button>
          <button className="text-white hover:text-red-500"
           onClick={()=> MoviesDispatch({
            type:actions.REMOVE_FROM_WATCHED,
            payload:movie.imdbID
          })}>
            <AiOutlineClose size={20} />
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
