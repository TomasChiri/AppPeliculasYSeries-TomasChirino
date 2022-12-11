import {createStore, combineReducers} from "redux";
import MovieReducer from "./reducers/movies.reducer";
import SerieReducer from "./reducers/series.reducer";

const RootReducer = combineReducers({
    movies:MovieReducer,
    series: SerieReducer,
});

export default createStore(RootReducer);