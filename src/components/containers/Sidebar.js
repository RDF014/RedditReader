import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/creator';

import Checkbox from '../presentation/Checkbox';

const SUBS = ['News', 'Gaming', 'Funny', 'Pics', 'Gifs', 'Videos', 'Aww']

class Sidebar extends Component {
  renderCheckbox() {
    const { subreddits, addSubreddit, removeSubreddit } = this.props;
    return SUBS.map((sub, idx) => {
      return (
        <Checkbox
          key={idx}
          sub={sub}
          checked={subreddits[sub] ? true : false}
          addSubreddit={addSubreddit}
          removeSubreddit={removeSubreddit}
        />
      )
    })
  }

  render() {
    return (
      <div className="Sidebar">
        {this.renderCheckbox()}
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

export default connect(mapStateToProps, mapDispachToProps)(Sidebar);;
