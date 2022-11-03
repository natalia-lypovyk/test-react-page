import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './screens/App/app';
import './index.css';
import { ConfigsProvider } from './configs.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ConfigsProvider>
    <App />
  </ConfigsProvider>
);
