import { Empty, Row, Col } from 'antd';

import MovieCard from './MovieCard.jsx';

export default function MovieList({ movies }) {
    if (!movies?.length) {
        return <Empty description="Movies not found" />;
    }

    return (
        <Row gutter={[16, 16]}>
            {movies.map((movie) => (
                <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
                    <MovieCard movie={movie} />
                </Col>
            ))}
        </Row>
    );
}