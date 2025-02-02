import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-5 flex justify-between items-center">
      <div className="text-2xl font-bold">ASOCIACIÓN UNACEM</div>
      <div className="flex space-x-4 items-center">
        <a href="#login" className="hover:text-gray-400">Hola, Bienvenido</a>
        <Link to={`/company-info`} className="hover:text-gray-400">Envío y Despacho</Link>
        <a href="#cart" className="hover:text-gray-400"><i className="fas fa-shoppi ng-cart"></i></a>
      </div>
    </header>
  );
};

export default Header;