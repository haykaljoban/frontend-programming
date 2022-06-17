// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/**
 * Buat slice: untuk menghasilkan action dan reducers.
 * Menerima param object: name, initialState, reducers
 */
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    // Membuat reducer updateMovies: untuk update movies
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// Generate action updateMovies
const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

// Export reducers dan actions
export default moviesReducer;
export { addMovie, updateMovies };
