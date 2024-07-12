import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-5 flex justify-between items-center">
      <div className="text-2xl font-bold">ASOCIACIÓN UNACEM</div>
      <div className="flex space-x-4 items-center">
        <a href="#login" className="hover:text-gray-400">Hola, Inicia sesión</a>
        <a href="#purchases" className="hover:text-gray-400">Productos</a>
        <a className="hover:text-gray-400">Despacho</a>
        <a href="#cart" className="hover:text-gray-400"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </header>
  );
};

export default Header;