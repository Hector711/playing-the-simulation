import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ESTILOS CSS
import '@/css/0/reset.css';
import '@/css/elements.css';
import '@/css/init.css';
// Layout
import '@/css/layout-nav.css';
import '@/css/layout-model.css';
// Profile Pages
import '@/css/page-wellcome.css';
import '@/css/page-home.css';
import '@/css/page-planning.css';
import '@/css/page-profile.css';
import '@/css/page-messages.css';
// Playground Pages
import '@/css/page-bonus.css';
import '@/css/page-retos.css';
// Classroom Pages
import '@/css/page-classroom.css';
// Community Pages
import '@/css/page-members.css';
import '@/css/page-calendar.css';
import '@/css/page-community.css';
import '@/css/page-rules.css';
import '@/css/page-levels.css';
import '@/css/page-introduction.css';
import '@/css/page-bails-system.css';
import '@/css/page-archives.css';
import '@/css/page-categories.css';
import '@/css/page-bails.css';
// Components
import '@/css/comp-footer.css';
import '@/css/comp-post.css';
import '@/css/comp-avatar.css';
import '@/css/comp-line-months.css';
import '@/css/comp-new-post.css';
import '@/css/comp-dnd-kit.css';
import '@/css/comp-select-filter.css';
import '@/css/comp-news.css';
import '@/css/comp-aside-profile.css';
import '@/css/comp-line-leves.css';
import '@/css/comp-content-grid.css';
import '@/css/comp-accordions.css';
import '@/css/comp-playground-card.css';

// TYPOGRAFÍAS
// 'Comfortaa Variable' : Supports weights 300-700
import '@fontsource-variable/comfortaa';

// 'Figtree Variable': Supports weights 300-900
import '@fontsource-variable/figtree';

// 'Tenor Sans'
import '@fontsource/tenor-sans';

// Supports weights 100-900
import '@fontsource-variable/onest';

// 'Gilroy': Supports weights 100-900
import '@pixelpay/fonts/dist/gilroy.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
