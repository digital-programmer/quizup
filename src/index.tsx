import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Pages/App';
import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);
