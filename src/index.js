import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterIndex } from './Router/RouterIndex';
import { store } from './store/store';
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <RouterIndex />
  </Provider>,
  document.getElementById('root')
);

