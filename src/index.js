import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App';
import './firebase'
import { LangProvider } from 'components/context/langContext';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
