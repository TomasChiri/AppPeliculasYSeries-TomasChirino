export const SELECTED_MOVIE = "SELECTED_MOVIE";

export const selectMovie = (id) => ({
    type: SELECTED_MOVIE,
    movieID : id,
})