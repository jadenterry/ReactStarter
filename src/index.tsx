import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import initStore from './store';
import store from './store';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
