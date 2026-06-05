import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Space } from 'antd';

import { fetchMovies } from '../../store/thunks/moviesThunk.js';
import { fetchGenres } from '../../store/thunks/genresThunk.js';

import useDebounce from '../../hooks/useDebounce.js';

import Loader from '../../components/Loader/Loader.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieFilters from './components/MovieFilters.jsx';
import MovieSort from './components/MovieSort.jsx';
import MovieList from './components/MovieList.jsx';

const { Title, Paragraph } = Typography;

export default function Movies() {
  const dispatch = useDispatch();

  const { movies, loading, error, filters, filtersTouched } = useSelector((state) => state.movies);
  const { genres, loading: genresLoading } = useSelector((state) => state.genres);

  const debouncedSearch = useDebounce(filters.search, 500);

  const requestFilters = useMemo(() => {
    return {
      ...filters,
      search: debouncedSearch,
    };
  }, [debouncedSearch]);

  useEffect(() => {
    if(filtersTouched) {
      dispatch(fetchMovies(requestFilters));
    }
  }, [requestFilters, dispatch]);

  return (
    <Space orientation="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={2}>Movies</Title>
        <Paragraph>Search, filter and sort movies from the catalog.</Paragraph>
      </div>

      <MovieFilters genres={genres} genresLoading={genresLoading} />

      <MovieSort />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <MovieList movies={movies} />}
    </Space>
  );
}
