import { Button, Card, Col, Input, InputNumber, Row, Select } from 'antd';

export default function MovieFilters({ genres, genresLoading }) {
    const genreOptions = genres?.map((genre) => ({
        label: genre.label,
        value: genre.value
    }));

    return (
        <Card title="Filters">
            <Row gutter={[16, 16]}>
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search by title"
                        value={''}
                        onChange={(event) => {
                           console.log(event);
                        }}
                        allowClear
                    />
                </Col>

                <Col xs={24} md={6}>
                    <Select
                        placeholder="Genre"
                        value={""}
                        options={genreOptions}
                        loading={genresLoading}
                        onChange={(value) => {
                            console.log(value);
                        }}
                        allowClear
                        style={{ width: '100%' }}
                    />
                </Col>

                <Col xs={24} md={4}>
                    <InputNumber
                        placeholder="Year"
                        value={""}
                        min={1900}
                        max={2100}
                        onChange={(value) => {
                            console.log(value);
                        }}
                        style={{ width: '100%' }}
                    />
                </Col>

                <Col xs={24} md={4}>
                    <InputNumber
                        placeholder="Min rating"
                        value={""}
                        min={0}
                        max={10}
                        step={0.1}
                        onChange={(value) => {
                            console.log(value);
                        }}
                        style={{ width: '100%' }}
                    />
                </Col>

                <Col xs={24} md={4}>
                    <Button
                        type="default"
                        onClick={() => {
                            console.log("");
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