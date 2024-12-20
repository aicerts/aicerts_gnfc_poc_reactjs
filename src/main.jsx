import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiDataProvider } from './store/context';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
