import React from 'react';
import ReactDOM from 'react-dom';
import UserLoginForm from './components/UserLogin/UserLogin';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <UserLoginForm />
  </Provider>,
  document.getElementById('app')
);
