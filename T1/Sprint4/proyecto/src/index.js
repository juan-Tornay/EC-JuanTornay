import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Asegúrate de que este archivo contenga los estilos globales si es necesario

import GuildMemberManagement from './components/GuildMemberManagment/GuildMemberManagement';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <GuildMemberManagement />
  </React.StrictMode>
);







