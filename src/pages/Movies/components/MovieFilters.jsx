import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Col, Input, InputNumber, Row, Select } from 'antd';

import {
  setSearch,
  setGenre,
  setYear,
  setRating,
  resetFilters,
} from '../../../store/slices/moviesSlice.js';

export default function MovieFilters({ genres = [], genresLoading = false }) {
  const dispatch = useDispatch();

  const { filters } = useSelector((state) => state.movies);

  const genreOptions = genres.map((genre) => ({
    label: genre.label,
    value: genre.value,
  }));

  return (
    <Card title="Filters">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Input
            placeholder="Search by title"
            value={filters.search}
            onChange={(event) => {
              dispatch(setSearch(event.target.value));
            }}
            allowClear
          />
        </Col>

        <Col xs={24} md={6}>
          <Select
            placeholder="Genre"
            value={filters.genre || undefined}
            options={genreOptions}
            loading={genresLoading}
            onChange={(value) => {
              dispatch(setGenre(value));
            }}
            allowClear
            style={{ width: '100%' }}
          />
        </Col>

        <Col xs={24} md={4}>
          <InputNumber
            placeholder="Year"
            value={filters.year || undefined}
            min={1900}
            max={2100}
            onChange={(value) => {
              dispatch(setYear(value || ''));
            }}
            style={{ width: '100%' }}
          />
        </Col>

        <Col xs={24} md={4}>
          <InputNumber
            placeholder="Min rating"
            value={filters.rating || undefined}
            min={0}
            max={10}
            step={0.1}
            onChange={(value) => {
              dispatch(setRating(value || ''));
            }}
            style={{ width: '100%' }}
          />
        </Col>

        <Col xs={24} md={4}>
          <Button
            type="default"
            onClick={() => {
              dispatch(resetFilters());
            }}
            block
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
