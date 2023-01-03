import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// holds global styles for all components
import './style.css' 

import store from './redux/store';

import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);