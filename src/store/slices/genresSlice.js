import { createSlice } from '@reduxjs/toolkit';

import { fetchGenres } from '../thunks/genresThunk.js';

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default genresSlice.reducer;
