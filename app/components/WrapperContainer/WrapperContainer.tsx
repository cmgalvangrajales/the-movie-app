import { Card, Space } from "antd";
import { WrapperStyles } from './WrapperContainer.styles';

const Wrapper = () => {
  return (
    <WrapperStyles.Container>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </WrapperStyles.Container>
  );
};

export default Wrapper;