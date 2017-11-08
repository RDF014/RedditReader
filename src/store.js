import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// reducers
import rootReducer from './reducers';

// to enable the redux dev tool for chrome
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer, 
  enhancers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);
export default store;