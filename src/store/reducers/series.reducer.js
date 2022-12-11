import { SERIES } from "../../data/series";
import { SELECTED_SERIES } from "../actions/series.action";

const initialState = {
    series: SERIES,
    selectedSeries: null,
}


const SerieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_SERIES:
            return{
                ...state,
                selectedSeries: state.series.find((series) => series.id === action.seriesID),
            }; 
        default:
            return state;
    }
}

export default SerieReducer;