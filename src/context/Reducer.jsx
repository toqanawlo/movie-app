import * as actions from"./ActionTypes.jsx";
export const reducer=(state,action)=>{
    switch(action.type){
case actions.ADD_TO_WATCHLIST:
    return{
        ...state,
        watchlist:[...state.watchlist,action.payload],
    }
    case actions.REMOVE_FROM_WATCHLIST:
        return{
            ...state,
            watchlist:state.watchlist.filter(
                (movie)=>movie.imdbID !== action.payload    
            )
        }
        case actions.MOVE_TO_WATCHLIST:
            return{
                ...state,
                watched:state.watched.filter((movie)=>movie.imdbID !== action.payload.imdbID),
                watchlist:[...state.watchlist,action.payload],
            }
            case actions.ADD_TO_WATCHED:
    return{
        ...state,
        watched:[...state.watched,action.payload],
        watchlist:state.watchlist.filter((movie)=>movie.imdbID !== action.payload.imdbID),
    }
    case actions.REMOVE_FROM_WATCHED:
        return{
            ...state,
            watched:state.watched.filter(
                (movie)=>movie.imdbID !== action.payload    
            )
        }
     default:
        return state;
    }
}