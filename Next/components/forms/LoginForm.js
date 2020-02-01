import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import Link from 'next/link'
function LoginForm(props) {

    const {handleSubmit,getFieldDecorator,loginLoader} = props
    return (
        <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            loading={loginLoader}
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <br />
          Or <Link href="/register"><a>register now!</a></Link>
        </Form.Item>
      </Form>
    );
}

export default LoginForm;