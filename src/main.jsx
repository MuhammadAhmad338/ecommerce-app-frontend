import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyContext } from './Context/MyContext';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext>
    <App />
  </MyContext>
)
