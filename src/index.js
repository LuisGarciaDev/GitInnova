import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

