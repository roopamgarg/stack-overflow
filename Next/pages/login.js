import React, { useEffect } from "react";
import { Form } from "antd";
import { connect } from "react-redux";
import { message } from "antd";
import  Link from "next/link";
import cookie from "react-cookies";
import  Router from 'next/router';

import Layout from "../components/layout/Layout";
import LoginForm from "../components/forms/LoginForm";

import { loginUser } from "../redux/index";

function LoginPage(props) {
    
  useEffect(()=>{
    if(cookie.load('token')){
      return Router.push('/','/', { shallow: true })
     }
  },[])
  const handleSubmit =  e => {
    e.preventDefault();

    props.form.validateFields(async (err, values) => {
      if (!err) {
        try{
        console.log("Received values of form: ", values);
        await props.loginUser(values, message);
        }catch(err){

        }
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Layout>
    <div className="login__form-container">
      <LoginForm 
        getFieldDecorator={getFieldDecorator} 
        loginLoader={props.loginLoader} 
        handleSubmit={handleSubmit}
      />
    </div>
    </Layout>
  );
}

const WrappedLoginForm = Form.create({ name: "login_form" })(LoginPage);
const mapStateToProps = state => ({
  loginLoader: state.user.loginLoader
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser:  (data, message) => 
      loginUser(data, message)(dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);
