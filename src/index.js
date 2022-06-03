// librerias de React, la trae desde node_modules
//import NombreComponente from 'NombreComponente';
import React from 'react';

//libreria de ReactDOM, la trae desde node_modules
import ReactDOM from 'react-dom/client';

//Agarrar una app que ya exista en React 
import App from './App';


/*function App() {
  return "Hola Mundo desde React";
}*/

// const App = () => "Hola Mundo desde React";

import "./sass/main.scss";

//Mostrar la App en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

