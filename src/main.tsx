import React from 'react';
import ReactDOM from 'react-dom/client';
import { AkatuLandingPage } from './components/generated/AkatuLandingPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AkatuLandingPage />
  </React.StrictMode>,
);
