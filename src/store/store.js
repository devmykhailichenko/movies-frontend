import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './slices/moviesSlice.js';
import genresReducer from './slices/genresSlice.js';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
    }
});