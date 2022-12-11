export const SELECTED_SERIES = "SELECTED_SERIES";

export const selectSeries = (id) => ({
    type: SELECTED_SERIES,
    seriesID : id,
})