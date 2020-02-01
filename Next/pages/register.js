import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { connect } from "react-redux";
import cookie from "react-cookies";
import Router from "next/router";

import Layout from "../components/layout/Layout";
import RegisterForm from "../components/forms/RegisterForm";

import { registerUser } from "../redux/index";

function RegisterPage(props) {

  useEffect(() => {
    if (cookie.load("token")) {
      return Router.push("/");
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          await props.registerUser(values, props.history, message);
        } catch (err) {}
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Layout>
      <div className="login__form-container">
        <RegisterForm
          getFieldDecorator={getFieldDecorator}
          registerLoader={props.registerLoader}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
}
const WrappedRegisterForm = Form.create({ name: "register_form" })(
  RegisterPage
);

const mapStateToProps = state => ({
  registerLoader: state.user.registerLoader
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (data, history, message) =>
      registerUser(data, history, message)(dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegisterForm);
