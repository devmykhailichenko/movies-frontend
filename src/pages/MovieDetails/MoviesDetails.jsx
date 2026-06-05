import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Image, Row, Space, Tag, Typography, Rate } from 'antd';

import { fetchMovieById } from '../../store/thunks/moviesThunk.js';
import { clearCurrentMovie } from '../../store/slices/moviesSlice.js';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const { Title, Paragraph, Text } = Typography;

export default function MoviesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentMovie, currentMovieLoading, currentMovieError } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovieById(id));

    return () => {
      dispatch(clearCurrentMovie());
    };
  }, [dispatch, id]);

  if (currentMovieLoading) {
    return <Loader />;
  }

  if (currentMovieError) {
    return <ErrorMessage message={currentMovieError} />;
  }

  if (!currentMovie) {
    return null;
  }

  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <Image
            src={currentMovie.poster}
            alt={currentMovie.title}
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
        </Col>

        <Col xs={24} md={16}>
          <Space direction="vertical" size="middle">
            <Title level={2}>{currentMovie.title}</Title>

            <Space wrap>
              <Tag>{currentMovie.genre}</Tag>
              <Tag>{currentMovie.year}</Tag>
              <Tag>{currentMovie.duration} min</Tag>
            </Space>

            <div>
              <Rate disabled allowHalf value={currentMovie.rating / 2} />
              <Text style={{ marginLeft: 12 }}>{currentMovie.rating} / 10</Text>
            </div>

            <Paragraph>{currentMovie.description}</Paragraph>

            <Button type="primary" onClick={() => navigate('/movies')}>
              Back to movies
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
