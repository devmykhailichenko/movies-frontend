import { Card, Col, Row, Select } from 'antd';

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
    return (
        <Card title="Sorting">
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Select
                        placeholder="Sort by"
                        value={""}
                        options={sortByOptions}
                        onChange={(value) => {
                            console.log(value);
                        }}
                        allowClear
                        style={{ width: '100%' }}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <Select
                        value={""}
                        options={orderOptions}
                        onChange={(value) => {
                            console.log(value);
                        }}
                        style={{ width: '100%' }}
                    />
                </Col>
            </Row>
        </Card>
    );
}