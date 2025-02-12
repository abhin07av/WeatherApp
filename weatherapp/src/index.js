import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Weatherprovider } from './context/Weathercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weatherprovider>
    
    <App />
    </Weatherprovider>
    <div className='Author'>
    <h2>Made by -Thunder</h2>
    </div>
  </React.StrictMode>

);
