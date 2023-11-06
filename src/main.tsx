import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './main.scss';
import { AppContextProvider } from './context/app.context.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
