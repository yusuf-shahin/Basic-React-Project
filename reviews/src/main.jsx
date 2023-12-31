import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import NewThing from './assets/NewThing/NewThing.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NewThing />
  </React.StrictMode>
);
