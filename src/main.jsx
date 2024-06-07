import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ESTILOS CSS
import '@/css/0/reset.css';
import '@/css/init.css';
import '@/css/main.css';
import '@/css/wellcome-page.css';
import '@/css/home-page.css';
import '@/css/comp-nav.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
