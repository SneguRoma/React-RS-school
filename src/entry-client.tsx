import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const container = document.getElementById('root');

hydrateRoot(
  container as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header name="RoboWorld" />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
