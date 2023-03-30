import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer,movieCastReducer,watchListReducer} from "./movieReducer";

const reducers = combineReducers({
    allMovies: movieReducer,
    movie: selectedMovieReducer,
    movieCast: movieCastReducer,
    watchList: watchListReducer,
});

export default reducers;    