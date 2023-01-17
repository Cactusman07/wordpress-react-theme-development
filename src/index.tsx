import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* StrictMode is a tool for highlighting potential problems in an application 
   We’re just using it here to help debug issues. StrictMode checks are run in 
   development mode only and don’t impact production builds
*/