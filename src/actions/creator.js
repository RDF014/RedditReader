import axios from 'axios';

export function addSubreddit (subreddit) {
  return {
    type: 'ADD_SUBREDDIT',
    payload: { subreddit }
  };
};

export function removeSubreddit (subreddit) {
  return {
    type: 'REMOVE_SUBREDDIT',
    payload: { subreddit }
  };
};


export function requestPosts (subreddit) {
  return {
    type: 'REQUEST_POSTS',
    payload: { subreddit }
  };
};

export function invalidRequest (subreddit) {
  return {
    type: 'INVALID_REQUEST',
    payload: { subreddit }
  };
};

export function retrievePosts (subreddit, posts) {
  return {
    type: 'RETRIEVE_POSTS',
    payload: { subreddit, posts }
  }
}

export function fetchPosts (subreddit) {
  return (dispatch, getState) => {
    dispatch( requestPosts(subreddit) );
    axios.get(`https://www.reddit.com/r/${subreddit}.json?limit=10`)
      .then(res => dispatch( retrievePosts(subreddit, res) ) )
      .catch(err => dispatch( invalidRequest(subreddit) ) );
  }
}
