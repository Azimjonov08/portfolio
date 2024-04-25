import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)
