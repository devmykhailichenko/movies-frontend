import { Card, List, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const technologies = [
    'React',
    'Redux Toolkit',
    'redux-thunk',
    'React Router',
    'Axios',
    'Ant Design',
    'Vite',
    'Environment variables',
    'Express backend'
];

const features = [
    'Loading movie list from API',
    'Loading movie details by id',
    'Searching movies by title',
    'Filtering movies by genre',
    'Filtering movies by year',
    'Filtering movies by minimum rating',
    'Sorting movies by title, year, rating and duration',
    'Error and loading state handling',
    'Responsive UI based on Ant Design'
];

export default function About() {
    return (
        <Card>
            <Title level={2}>About the project</Title>

            <Paragraph>
                Movie Finder is a diploma project that demonstrates the
                development of a modern frontend application with centralized
                state management and asynchronous API requests.
            </Paragraph>

            <Title level={3}>Technologies</Title>

            <List
                bordered
                dataSource={technologies}
                renderItem={(item) => (
                    <List.Item>{item}</List.Item>
                )}
            />

            <Title level={3} style={{ marginTop: 24 }}>
                Main features
            </Title>

            <List
                bordered
                dataSource={features}
                renderItem={(item) => (
                    <List.Item>{item}</List.Item>
                )}
            />
        </Card>
    );
}