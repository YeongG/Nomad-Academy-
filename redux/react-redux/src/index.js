import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import todoStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);