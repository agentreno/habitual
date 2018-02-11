import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import habitReducer from './reducers'

let store = createStore(habitReducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
