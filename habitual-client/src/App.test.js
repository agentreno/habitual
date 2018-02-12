import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import habitReducer from './reducers'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(habitReducer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
