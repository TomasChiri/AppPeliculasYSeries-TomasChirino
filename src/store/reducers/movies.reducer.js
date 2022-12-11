import { MOVIES } from "../../data/movies";
import { SELECTED_MOVIE } from "../actions/movies.action";

const initialState = {
    movies: MOVIES,
    selectedMovie: null,
}


const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_MOVIE:
            return{
                ...state,
                selectedMovie: state.movies.find((movie) => movie.id === action.movieID),
            }; 
        default:
            return state;
    }
}

export default MovieReducer;