import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reduxStore from './ReduxStore';



const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  rootElement,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
