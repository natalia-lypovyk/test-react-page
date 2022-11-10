import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Main from './components/main';
import { AuthProvider } from './context/auth.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </BrowserRouter>
);
