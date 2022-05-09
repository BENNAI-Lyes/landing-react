import styled from "styled-components";
import { Form, Input, Button } from "antd";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper id="Contact">
      <h2>Get in Touch</h2>
      <div className="form">
        <Form
          className="form-content"
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your subject!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Input.TextArea
            rows={6}
            placeholder="maxLength is 200"
            maxLength={200}
            className="textarea"
          />

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;
  background: #f4f4f4;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .form {
    padding: 0 2rem;
    .form-content {
      margin: auto;
      max-width: 700px;

      .textarea {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export default Contact;
