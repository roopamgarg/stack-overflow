import React from 'react';
import { List, Skeleton, Avatar, Tag } from "antd";
import Link from "next/link";
import {getDownVotesLength,getUpVotesLength,colorList,renderTags} from "../../helper/helper";

function Questions(props) {
    const {item,index} = props
    return (
        <List.Item

        actions={[
          <a  style={{marginLeft:"45px"}} key="list-loadmore-more-1">
            {getUpVotesLength(item.votes)} Up Votes
          </a>,
          <a key="list-loadmore-more">
            {getDownVotesLength(item.votes)} Down Votes
          </a>
        ]}
      >
        <Skeleton
          avatar
          title={false}
          loading={props.questionsLoader}
          active
        >
          <List.Item.Meta
            avatar={
              <Avatar
                style={{
                  backgroundColor: colorList[index % 4],
                  verticalAlign: "middle"
                }}
                size="large"
              >
                {item.creator.displayName[0].toUpperCase()}
              </Avatar>
            }
            title={
              <Link href={`/question/${item._id}`}>
                <a
                  style={{
                    fontSize: "1.4rem",
                    margin: "0 0 0.5rem 0",
                    display: "inline-block"
                  }}
                >
                  {item.title}
                </a>
              </Link>
            }
            description={renderTags(item.tags,index)}
          />
          <div style={{marginLeft:"56px"}}>{item.creator.displayName}</div>
        </Skeleton>
      </List.Item>
    
    );
}

export default Questions;