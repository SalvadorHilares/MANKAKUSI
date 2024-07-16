import React from 'react';
import Footer from '../Footer/Footer';

const CompanyInfo = () => {
  return (
    <div className="p-5 bg-green-50 border border-green-900 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-green-900 text-center">Despacho</h1>
      <p className="text-lg mb-6 text-green-800 text-center">
        Gestionar la inversión social bajo un modelo de valor compartido, generando oportunidades de desarrollo, respetando el entorno y los derechos humanos.
      </p>
      <div className="flex justify-center space-x-8">
        <div className="w-1/3 p-2 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Estación del Tren</h2>
          <ul className="list-disc text-green-600 inline-block text-left">
            <li>Los Jardines</li>
            <li>Presbitero Maestro</li>
            <li>La Cultura</li>
            <li>Cabitos</li>
            <li>Atocongo</li>
          </ul>
          <img src="/src/images/Linea1.jpeg" alt="Linea 1" className="w-48 h-48 mt-4 mx-auto" />
        </div>
        <div className="w-1/3 p-2 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Metropolitano</h2>
          <ul className="list-disc text-green-600 inline-block text-left">
            <li>Naranjal</li>
            <li>UNI</li>
            <li>Central</li>
            <li>Plaza de Flores</li>
            <li>Matellini</li>
          </ul>
          <img src="/src/images/Metropolitano.jpeg" alt="Metropolitano" className="w-48 h-48 mt-4 mx-auto" />
        </div>
        <div className="w-1/3 p-2 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Eventos</h2>
          <ul className="list-disc text-green-600 inline-block text-left">
            <li>Feria de Empleo</li>
            <li>Conciertos</li>
            <li>Exposiciones</li>
            <li>Festival de Gastronomía</li>
          </ul>
          <img src="/src/images/Evento.jpeg" alt="Evento" className="w-48 h-48 mt-4 mx-auto" />
        </div>
      </div>
      <div className='mb-1 text-center'>
              <button
                onClick={() => window.history.back()}
                className="mb-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Volver
              </button>
            </div>
      <Footer />
    </div>
  );
};

export default CompanyInfo;
