import { createSlice } from '@reduxjs/toolkit';

import { fetchMovies, fetchMovieById } from '../thunks/moviesThunk.js';

const initialState = {
  movies: [],
  currentMovie: null,
  loading: false,
  currentMovieLoading: false,
  error: null,
  filters: {
    search: '',
    genre: '',
    year: '',
    rating: '',
    sortBy: '',
    order: '',
  },
  filtersTouched: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.filters.search = action.payload;
      state.filtersTouched = true;
    },
    setGenre: (state, action) => {
      state.filters.genre = action.payload;
      state.filtersTouched = true;
    },
    setYear: (state, action) => {
      state.filters.year = action.payload;
      state.filtersTouched = true;
    },
    setRating: (state, action) => {
      state.filters.rating = action.payload;
      state.filtersTouched = true;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    setOrder: (state, action) => {
      state.filters.order = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
      state.currentMovieError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.currentMovieLoading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.currentMovieLoading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state) => {
        state.currentMovieLoading = false;
      });
  },
});

export const {
  setSearch,
  setGenre,
  setYear,
  setRating,
  setSortBy,
  setOrder,
  resetFilters,
  clearCurrentMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
