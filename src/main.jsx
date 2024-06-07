import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ESTILOS CSS
import '@/css/0/reset.css';
import '@/css/elements.css';
import '@/css/init.css';
import '@/css/page-wellcome.css';
import '@/css/page-home.css';
import '@/css/comp-nav.css';
import '@/css/comp-footer.css';
import '@/css/comp-post.css';
import '@/css/comp-aside-left.css';
import '@/css/comp-aside-right.css';

// TYPOGRAFÍAS

// 'Comfortaa Variable'
// Supports weights 300-700
import '@fontsource-variable/comfortaa';

// 'Figtree Variable'
// Supports weights 300-900
import '@fontsource-variable/figtree';

// 'Tenor Sans'
import '@fontsource/tenor-sans';

// Supports weights 100-900
import '@fontsource-variable/onest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
