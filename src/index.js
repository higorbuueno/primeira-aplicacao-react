import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './aulas/aula03';
import Exercicio from './exercicios/calculadora';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Exercicio />
  </React.StrictMode>
);