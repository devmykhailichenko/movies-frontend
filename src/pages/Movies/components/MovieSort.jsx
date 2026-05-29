import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Select } from 'antd';

import {
    setSortBy,
    setOrder
} from '../../../store/slices/moviesSlice.js';

const sortByOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Year', value: 'year' },
    { label: 'Rating', value: 'rating' },
    { label: 'Duration', value: 'duration' }
];

const orderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' }
];

export default function MovieSort() {
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state.movies);

    return (
        <Card title="Sorting">
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Select
                        placeholder="Sort by"
                        value={filters.sortBy || undefined}
                        options={sortByOptions}
                        onChange={(value) => {
                            dispatch(setSortBy(value));
                        }}
                        allowClear
                        style={{ width: '100%' }}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <Select
                        value={filters.order}
                        options={orderOptions}
                        onChange={(value) => {
                            dispatch(setOrder(value));
                        }}
                        style={{ width: '100%' }}
                    />
                </Col>
            </Row>
        </Card>
    );
}