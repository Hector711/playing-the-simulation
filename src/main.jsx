import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ESTILOS CSS
import '@/css/0/reset.css';
import '@/css/elements.css';
import '@/css/init.css';
// Layout
import '@/css/layout-nav.css';
import '@/css/layout-profile.css';
import '@/css/layout-model.css';
// Profile Pages
import '@/css/page-wellcome.css';
import '@/css/page-home.css';
import '@/css/page-goals.css';
// Community Pages
import '@/css/page-classroom.css';
import '@/css/page-members.css';
import '@/css/page-calendar.css';
// Components
import '@/css/comp-footer.css';
import '@/css/comp-post.css';
import '@/css/comp-aside-right.css';
import '@/css/comp-new-post.css';
import '@/css/comp-dnd-kit.css';
import '@/css/comp-select-filter.css';

// TYPOGRAFÍAS
// 'Comfortaa Variable' : Supports weights 300-700
import '@fontsource-variable/comfortaa';

// 'Figtree Variable': Supports weights 300-900
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
