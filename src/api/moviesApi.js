import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_MOVIES = import.meta.env.VITE_GET_MOVIES;

const moviesApi = axios.create({
    baseURL: API_URL
});

export const getMovies = async () => {
    const response = await moviesApi.get(API_MOVIES);

    return response.data;
}