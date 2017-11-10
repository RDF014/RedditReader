import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/creator';

import Post from '../presentation/Post';
import Button from '../presentation/Button';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isRandomized: true
    }
  }

  componentDidMount() {
    this.updatePosts();
  }

  componentDidUpdate() {
    this.updatePosts();
  }

  updatePosts() {
    const { subreddits, fetchPosts, removeSubreddit } = this.props;
    Object.keys(subreddits).forEach(sub => {
      if (subreddits[sub].invalidReq) {
        return removeSubreddit(sub);
      }
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

  combinedPosts () {
    const posts = this.renderAllPosts();
    return posts.reduce((newArr, arr) => [...newArr, ...arr], []);
  }

  randomizePosts () {
    let posts = this.combinedPosts();
    let currentIndex = posts.length;
    let temporaryValue = null;
    let randomIndex = null;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = posts[currentIndex];
      posts[currentIndex] = posts[randomIndex];
      posts[randomIndex] = temporaryValue;
    }
    return posts;
  }

  handleClick() {
    const { isRandomized } = this.state;
    this.setState({isRandomized: !isRandomized});
  }

  render() {
    const { isRandomized } = this.state;
    return (
      <div className="Post-Container">
        <Button
          text={isRandomized ? 'Organize Posts' : 'Randomize Posts'}
          clickHandler={this.handleClick.bind(this)}
        />
        {isRandomized ? this.randomizePosts() : this.renderAllPosts()}
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
