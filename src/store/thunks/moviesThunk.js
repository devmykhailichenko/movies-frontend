import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovies, getMovieById } from '../../api/moviesApi.js';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (params, { rejectWithValue }) => {
        try {
            return await getMovies(params);
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch movies'
            );
        }
    }
);

export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (id, { rejectWithValue }) => {
        try {
            return await getMovieById(id);
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch movie'
            );
        }
    }
);

