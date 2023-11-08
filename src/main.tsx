import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './main.scss';
import { AppContextProvider } from './context/app.context.provider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
