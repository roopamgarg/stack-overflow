import React from 'react';
import { List, Comment, Avatar, Tooltip, Icon } from 'antd';
import { connect } from "react-redux";
import { voteReply } from "../../redux/index";
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import {getDownVotesLength,getUpVotesLength,colorList} from "../../helper/helper";


function Replies(props) {
    const getActions = (votes,replyId) => {
        const actions = [
            <span key="comment-basic-like">
              <Tooltip title="Up Vote" onClick={()=>props.voteReply(replyId,true,props.history)}>
                <Icon
                  type="up"
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{getUpVotesLength(votes)}</span>
            </span>,
            <span key="comment-basic-dislike">
              <Tooltip title="Down Vote" onClick={()=>props.voteReply(replyId,false,props.history)}>
                <Icon
                  type="down"
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{getDownVotesLength(votes)}</span>
            </span>
          ];
          return actions
    }
    const data = props.replies;
    return (
        <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item,index) => (
          <li>
            <Comment
              actions={getActions(item.votes,item._id)}
              author={item.user.displayName}
              avatar={<Avatar   style={{
                backgroundColor: colorList[index % 4],
                verticalAlign: "middle"
              }}
              size="large" >{item.user.displayName[0].toUpperCase()} </Avatar>}
              content={<ReactMarkdown source={item.text}/>}
              datetime={moment(item.createdAt).calendar() }
            />
          </li>
        )}
      />
    );
}
const mapStateToProps = state => ({ });
  
const mapDispatchToProps = dispatch => {
  return {
    voteReply: (id,type,history) => voteReply(id,type,history)(dispatch),
     
  };
};
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Replies)
