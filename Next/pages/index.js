import React, { Component } from "react";
import { List, Button } from "antd";
import { connect } from "react-redux";

import Layout from "../components/layout/Layout";
import AskQuestion from "../components/askQuestion/AskQuestion";
import Questions from "../components/questions/Questions";

import { getQuestions } from "../redux/index";
class IndexPage extends Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    try {
      const action = await getQuestions("");
      await action(store.dispatch);
      return { questions: store.getState().questions };
    } catch (err) {
      return {};
    }
  }

 
  render() {
    const props = this.props;
    console.log(props);
    return (
      <Layout>
        <div style={{ padding: "0 10%" }}>
          <List
            className="demo-loadmore-list"
            loading={props.questionsLoader}
            itemLayout="horizontal"
            dataSource={props.questions}
            renderItem={(item, index) => <Questions item={item} key={index} index={index} />}
          />
          <div style={{ padding: "2rem" }}>
            <AskQuestion {...props}>Ask Question</AskQuestion>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questions,
  questionsLoader: state.question.questionsLoader
});

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: (search, message) => dispatch(getQuestions(search, message))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
