// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Image, Row, Space, Tag, Typography, Rate } from 'antd';

// import Loader from '../../components/Loader/Loader';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const { Title, Paragraph, Text } = Typography;

export default function MoviesDetails() {
    // const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Card>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={8}>
                    <Image
                        src={"movie.poster"}
                        alt={"movie.title"}
                        width="100%"
                        style={{
                            borderRadius: 8
                        }}
                    />
                </Col>

                <Col xs={24} md={16}>
                    <Space orientation="vertical" size="middle">
                        <Title level={2}>{"movie.title"}</Title>

                        <Space wrap>
                            <Tag>{"movie.genre"}</Tag>
                            <Tag>{"movie.year"}</Tag>
                            <Tag>{"movie.duration"} min</Tag>
                        </Space>

                        <div>
                            <Rate
                                disabled
                                allowHalf
                                value={2}
                            />
                            <Text style={{ marginLeft: 12 }}>
                                {/*{movie.rating} / 10*/}
                            </Text>
                        </div>

                        <Paragraph>
                            {/*{movie.description}*/}
                        </Paragraph>

                        <Button
                            type="primary"
                            onClick={() => navigate('/movies')}
                        >
                            Back to movies
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    );
}