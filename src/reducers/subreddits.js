const initalState = {
  News: {
    posts: [],
    isFetching: false,
    invalidReq: false
  }
};

const initalPosts = {
  posts: [],
  isFetching: false,
  invalidReq: false
};


function subreddits (state = initalState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'ADD_SUBREDDIT':
      return {
        ...state,
        [payload.subreddit]: initalPosts
      }
    case 'REMOVE_SUBREDDIT':
      return Object.keys(state).reduce((newState, subreddit) => {
        if (subreddit !== payload.subreddit) {
          newState[subreddit] = state[subreddit];
        }
        return newState;
      }, {});
    case 'REQUEST_POSTS':
      return {
        ...state,
        [payload.subreddit]: posts(state[payload.subreddit], action)
      }
    case 'RETRIEVE_POSTS':
      return {
        ...state,
        [payload.subreddit]: posts(state[payload.subreddit], action)
      }
    case 'INVALID_REQUEST':
      return {
        ...state,
        [payload.subreddit]: posts(state[payload.subreddit], action)
      }
    default:
      return state;
  }
}

function posts (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'REQUEST_POSTS':
      return {
        ...state,
        isFetching: true
      };
    case 'RETRIEVE_POSTS':
      return {
        ...state,
        isFetching: false,
        posts: payload.posts.data.data.children,
        invalidReq: false
      };
    case 'INVALID_REQUEST':
      return {
        ...state,
        isFetching: false,
        invalidReq: true
      }
    default:
      return state;
  }
}

export default subreddits;