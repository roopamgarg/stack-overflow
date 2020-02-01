import React from 'react';
import { List, Button, Avatar, Tag, Icon } from 'antd';
import Reply from '../reply/Reply';
import ReactMarkdown from 'react-markdown';
import Replies from './Replies';
import {getDownVotesLength,getUpVotesLength,renderTags} from "../../helper/helper";

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

function QuestionDescription(props) {
    const {item} = props
    return (
        <div>
        <List.Item
          key={item._id}
          actions={[
            <Button
              onClick={() =>
                props.voteQuestion(item._id, true, props.history)
              }
            >
              <IconText
                type="up"
                text={getUpVotesLength(item.votes)}
                key="list-vertical-star-o"
              />
            </Button>,
            <Button
              onClick={() =>
                props.voteQuestion(item._id, false, props.history)
              }
            >
              <IconText
                type="down"
                text={getDownVotesLength(item.votes)}
                key="list-vertical-like-o"
              />
            </Button>,
            <Button>
              <IconText
                type="message"
                text={item.replies.length}
                key="list-vertical-message"
              />
            </Button>,
            <Reply questionId={item._id} {...props}>
              Add Reply
            </Reply>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                  verticalAlign: "middle"
                }}
                size="large"
              >
                {item.creator.displayName[0].toUpperCase()}
              </Avatar>
            }
            title={<a href={item.href}>{item.title}</a>}
            description={renderTags(item.tags)}
          />
          <ReactMarkdown source={item.description} />
        </List.Item>
        <Replies replies={item.replies} {...props} />
      </div>
    );
}

export default QuestionDescription;