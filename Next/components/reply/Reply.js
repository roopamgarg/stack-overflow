
import React, { useState } from "react";
import { Button, Modal, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { connect } from "react-redux";
import {addReply} from '../../redux/index';
import ReactMarkdown from "react-markdown";
import cookie from "react-cookies";
import Router from 'next/router'

function Reply(props) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");


  const showModal = () => {
    if(!cookie.load('token')){
      Router.push('/login')
    }
    setVisible(true);
  };

  const handleOk =async e => {
    console.log(e);
    
    setVisible(false);
    await props.addReply({text,questionId:props.questionId})
    setText("")
  
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };


  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {props.children}
      </Button>
      <Modal
        title="Add A Reply"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form className="login-form">
          <ReactMarkdown source={text} />
          <Form.Item>
            <TextArea
              placeholder="Enter Your Question Description( Mark Down Supported )"
              autoSize={{ minRows: 2 }}
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </Form.Item>
          
        </Form>
      </Modal>
    </div>
  );
}


const mapStateToProps = state => ({});
  
  const mapDispatchToProps = dispatch => {
    return {
      addReply: (data) => addReply(data)(dispatch)
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Reply);
