import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/creator';

import Post from '../presentation/Post';

class Posts extends Component {
  componentDidMount() {
    this.updatePosts();
  }

  componentDidUpdate(prevProps) {
    this.updatePosts();
  }

  updatePosts() {
    const { subreddits, fetchPosts } = this.props;
    Object.keys(subreddits).forEach(sub => {
      if (!subreddits[sub].isFetching && subreddits[sub].posts.length === 0) {
        fetchPosts(sub);
      }
    })
  }

  renderAllPosts () {
    const { subreddits } = this.props;
    return Object.keys(subreddits).map(sub => {
      return subreddits[sub].posts.map(({ data }) => <Post key={data.id} data={data} /> );
    })
  }

  render() {
    return (
      <div className="Post-Container">
        {this.renderAllPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Posts);;
