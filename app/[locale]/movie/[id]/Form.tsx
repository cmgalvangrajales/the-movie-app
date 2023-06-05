import { Button, Checkbox, Form, Input, Slider } from "antd";

const ValidateMovieForm = ({
  onFinish,
  onFinishFailed,
}: {
  onFinish: (value: any) => void;
  onFinishFailed: (errorInfo: any) => void;
}) => {
  // TODO: convert this form to a form generator

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="slider">
        <Slider min={1} max={10} tooltip={{ placement: "bottom" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Score
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ValidateMovieForm;
