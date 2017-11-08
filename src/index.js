import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import { Provider }  from 'react-redux';
import store from './store';

const reduxWrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(reduxWrapper, document.getElementById('root'));
registerServiceWorker();
