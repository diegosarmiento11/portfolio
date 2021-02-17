import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);

