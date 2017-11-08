import React from 'react';
import defaultThumbnail from '../../thumbnail.png';

const Post = (props) => {
  const {data} = props;
  const {
    thumbnail,
    title,
    url
  } = data;
  return (
    <div className="Post">
      <img className="Thumbnail" alt="thumbnail" src={thumbnail ? thumbnail : defaultThumbnail}/>
      <a href={url}>{title}</a>
    </div>
  )
};

export default Post;

