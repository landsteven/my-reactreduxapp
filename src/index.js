import React from 'react';
import { render } from 'react-dom';
import './styles/App.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './containers/app';
//import App from './App';

import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();