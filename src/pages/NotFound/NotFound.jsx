import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="The page you are looking for does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Back home</Button>
        </Link>
      }
    />
  );
}
