import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// veio assim mas o modelo no vídeo da alura está igual o exemplo abaixo:
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //dentro do root é onde ele joga todo o React
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// modelo do vídeo da alura:
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);



