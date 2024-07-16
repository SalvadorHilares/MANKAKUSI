import React from 'react';
import { Link } from 'react-router-dom';

const PotCard = ({ id, image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <div className="text-center">
          <Link to={`/potcard/${id}`} className="text-blue-500 hover:underline">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PotCard;
