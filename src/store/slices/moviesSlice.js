import { createSlice } from '@reduxjs/toolkit';

import { fetchMovies, fetchMovieById } from '../thunks/moviesThunk.js';

const initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    currentMovieLoading: false,
    error: null,
    currentMovieError: null,
    filters: {
        search: '',
        genre: '',
        year: '',
        rating: '',
        sortBy: '',
        order: ''
    }
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.filters.search = action.payload;
        },
        setGenre: (state, action) => {
            state.filters.genre = action.payload;
        },
        setYear: (state, action) => {
            state.filters.year = action.payload;
        },
        setRating: (state, action) => {
            state.filters.rating = action.payload;
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
        }
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
                state.currentMovieError = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.currentMovieLoading = false;
                state.currentMovie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.currentMovieLoading = false;
                state.currentMovieError = action.payload;
            })
    }
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