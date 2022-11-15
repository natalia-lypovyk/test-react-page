import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Main from './components/main';
import { AuthProvider } from './context/auth.context';
import { NotificationContextProvider } from './context/notification.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <NotificationContextProvider>
        <Main />
      </NotificationContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
