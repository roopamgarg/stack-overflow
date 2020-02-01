import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "antd";

import Layout from "../../components/layout/Layout";
import QuestionDescription from "../../components/questionDescription/QuestionDescription";

import { getQuestionById, voteQuestion } from "../../redux/index";


class QuestionDescriptionPage extends Component {
  static async getInitialProps({ store, query }) {
    try {
      const action = await getQuestionById(query.id);
      await action(store.dispatch);
      return { currentQuestion: store.getState().question.currentQuestion };
    } catch (err) {
      return {};
    }
  }
  render = () => {
    const props = this.props;
    console.log(props.currentQuestion);
    return (
      <Layout>
        <List
          itemLayout="vertical"
          size="large"
          style={{ padding: "0 10%" }}
          dataSource={props.currentQuestion._id ? [props.currentQuestion] : []}
          loading={props.currentQuestionLoader}
          renderItem={item => <QuestionDescription item={item} {...props} />}
        />
      </Layout>
    );
  };
}
const mapStateToProps = state => ({
  currentQuestion: state.question.currentQuestion,
  currentQuestionLoader: state.question.currentQuestionLoader
});

const mapDispatchToProps = dispatch => {
  return {
    getQuestionById: id => getQuestionById(id)(dispatch),
    voteQuestion: (id, type) => voteQuestion(id, type)(dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDescriptionPage);
