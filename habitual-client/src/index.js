import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { httpAction } from 'redux-observable-sans'

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import habitReducer from './reducers'
import rootEpic from './epics';


const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware()

let store = createStore(
  habitReducer,
  applyMiddleware(
    loggerMiddleware,
    epicMiddleware
  )
)
epicMiddleware.run(rootEpic)

const mapDispatchToProps = dispatch => ({
  http: httpAction(dispatch),
})
const Root = connect(null, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
