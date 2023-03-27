import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer,movieCastReducer } from "./movieReducer";

const reducers = combineReducers({
    allMovies: movieReducer,
    movie: selectedMovieReducer,
    movieCast: movieCastReducer,
});

export default reducers;    