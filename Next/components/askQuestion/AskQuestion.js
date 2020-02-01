import React, { useState } from "react";
import { Button, Modal, Form, Input, Icon, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { connect } from "react-redux";
import {askQuestion} from '../../redux/index';
import ReactMarkdown from "react-markdown";
import cookie from "react-cookies";
import Router from 'next/router'

function AskQuestion(props) {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tags,setTags] = useState([]);

  const showModal = () => {
    if(!cookie.load('token')){
      Router.push('/login')
      return setVisible(false);
    }
    setVisible(true);
  };

  const handleOk = async e => {
    console.log(e);
    await props.askQuestion({title,description,tags})
    setDescription("")
    setTitle("")
    setTags([])
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };
  const handleTagChange = val => {
        setTags(val)
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {props.children}
      </Button>
      <Modal
        title="Ask A Question"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form className="login-form">
          <Form.Item>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
            />
          </Form.Item>
          <ReactMarkdown source={description} />
          <Form.Item>
            <TextArea
              placeholder="Enter Your Question Description( Mark Down Supported)"
              autoSize={{ minRows: 2 }}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              tokenSeparators={[","]}
              value={tags}
              onChange={handleTagChange}
            ></Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}


const mapStateToProps = state => ({});
  
  const mapDispatchToProps = dispatch => {
    return {
      askQuestion: (data) =>
        askQuestion(data)(dispatch)
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(AskQuestion);
