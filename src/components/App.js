import React, { Component } from 'react';

import '../styles/App.css';

import Header from './presentation/Header';
import Posts from './containers/Posts';
import Sidebar from './containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Posts />
      </div>
    );
  }
}

export default App;
