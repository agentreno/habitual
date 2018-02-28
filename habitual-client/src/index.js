import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { fetchHabits } from './actions';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import habitReducer from './reducers'
import { Provider } from 'react-redux'


const loggerMiddleware = createLogger()

let store = createStore(
  habitReducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
)
store.dispatch(fetchHabits())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
