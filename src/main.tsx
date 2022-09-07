import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Sass/_global.scss';
import './Sass/_typography.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
