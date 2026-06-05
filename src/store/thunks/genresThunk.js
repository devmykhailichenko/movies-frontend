import { createAsyncThunk } from '@reduxjs/toolkit';

import { getGenres } from '../../api/genresApi.js';

export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres',
  async (_, { rejectWithValue }) => {
    try {
      return await getGenres();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch genres');
    }
  }
);
