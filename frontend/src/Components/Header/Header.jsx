import React from 'react';
import './Header.component.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">UNACEM</div>
      <nav>
        <ul>
          <li><a href="#categories">Categorías</a></li>
          <li><a href="#search">Buscar</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <a href="#login">Hola, Inicia sesión</a>
        <a href="#purchases">Productos</a>
        <a>Despacho</a>
        <a href="#cart"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </header>
  );
};

export default Header;