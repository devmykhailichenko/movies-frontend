import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_GENRES = import.meta.env.VITE_GET_GENRES;

const genresApi = axios.create({
  baseURL: API_URL,
});

export const getGenres = async () => {
  const response = await genresApi.get(API_GENRES);
  return response.data;
};
