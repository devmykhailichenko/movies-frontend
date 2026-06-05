import { Button, Card, Rate, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export default function MovieCard({ movie }) {
  return (
    <Card
      hoverable
      cover={
        <img
          src={movie.poster}
          alt={movie.title}
          style={{
            height: 360,
            objectFit: 'cover',
          }}
        />
      }
    >
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <Text strong>{movie.title}</Text>

        <Tag>{movie?.genre}</Tag>

        <Text>Year: {movie?.year}</Text>

        <Text>Duration: {movie?.duration} min</Text>

        <Rate disabled allowHalf value={movie?.rating / 2} />

        <Text>Rating: {movie?.rating}</Text>

        <Link to={`/movies/${movie.id}`}>
          <Button type="primary" block>
            Details
          </Button>
        </Link>
      </Space>
    </Card>
  );
}
