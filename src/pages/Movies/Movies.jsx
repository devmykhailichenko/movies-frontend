import { Typography, Space } from 'antd';
import MovieFilters from './components/MovieFilters.jsx';
import MovieSort from './components/MovieSort.jsx';
// import MovieList from './components/MovieList.jsx';
// import Loader from '../../components/Loader/Loader';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const { Title, Paragraph } = Typography;

export default function Movies() {
    return (
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <div>
                <Title level={2}>Movies</Title>
                <Paragraph>
                    Search, filter and sort movies from the catalog.
                </Paragraph>
            </div>
            <MovieFilters
                genres={[]}
                genresLoading={false}
            />
            <MovieSort />
            {/*{loading && <Loader />}*/}
            {/*{error && <ErrorMessage message={error} />}*/}
            {/*{!loading && !error && <MovieList movies={movies} />}*/}
        </Space>
    );
}