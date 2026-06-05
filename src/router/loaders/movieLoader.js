import { store } from '../../store/store.js';

import { fetchMovies, fetchMovieById } from '../../store/thunks/moviesThunk.js';
import { fetchGenres } from '../../store/thunks/genresThunk.js';

export async function moviesLoader() {
    await Promise.all([
        store.dispatch(fetchMovies({})).unwrap(),
        store.dispatch(fetchGenres()).unwrap()
    ])

    return null;
}

export async function movieDetailsLoader({ params }) {
    await store.dispatch(
        fetchMovieById(params.id)
    ).unwrap();

    return null;
}