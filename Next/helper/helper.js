import React from 'react'
import { Tag } from "antd";

export const getUpVotesLength = votes => {
  const upVotes = votes.filter(({ type }) => type === true);
  return upVotes.length;
};

export const getDownVotesLength = votes => {
  const upVotes = votes.filter(({ type }) => type === false);
  return upVotes.length;
};

export const renderTags = (tags, keys) => {
  return tags.map((tag, index) => (
    <Tag key={index} color="blue">
      {tag}
    </Tag>
  ));
};

export const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
