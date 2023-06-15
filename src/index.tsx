import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
}

reportWebVitals();
