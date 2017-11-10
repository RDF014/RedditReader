import React from 'react';
import defaultThumbnail from '../../thumbnail.png';

const Post = (props) => {
  const {
    data: {
      subreddit_name_prefixed,
      thumbnail,
      title,
      url
    }
  } = props;
  return (
    <div className="Post">
      <figure>
        <img className="Thumbnail" alt="thumbnail" src={thumbnail && thumbnail !== 'self' ? thumbnail : defaultThumbnail}/>
        <figcaption>{subreddit_name_prefixed}</figcaption>
      </figure>
      <article>
        <a href={url}>{title}</a>
      </article>
    </div>
  )
};

export default Post;

