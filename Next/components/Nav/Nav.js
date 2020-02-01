import React from "react";
import "./Nav.scss";
import { Button } from "antd";
import Link from "next/link";
import cookie from "react-cookies";
import AskQuestion from "../askQuestion/AskQuestion";
import { connect } from "react-redux";
import {logoutUser} from "../../redux/index"
function Nav(props) {
  const renderButtons = () => {
    if (cookie.load("token")) {
        console.log(props)
      return (
        <div className="nav__buttons">
          <AskQuestion {...props}>Ask Question</AskQuestion>
          <Button onClick={() => props.logoutUser()}>Logout</Button>
        </div>
      );
    }
    return (
        <div className="nav__buttons">
        <Link href="/login">
          <Button  type="primary">
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button >Register</Button>
        </Link>
      </div>
    )
  };
  return (
    <div className="nav">
      <div>
        <Link href="/"><a>Stack Overflow Clone</a></Link>
      </div>

     {renderButtons()}
    </div>
  );
}

const mapStateToProps = state => ({
    questions: state.question.questions,
    questionsLoader: state.question.questionsLoader
  });
  
  const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);
  