import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Aquí sí debes importar el componente App
import './index.css';     // Importar estilos globales
import './App.css';       // Importar tus estilos específicos

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

