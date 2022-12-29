import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


interface Store {
  setDarkMode?:Function;
  isDarkMode?:boolean;
}

declare global {
  interface Window { store: Store; }
}


window.store = {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
