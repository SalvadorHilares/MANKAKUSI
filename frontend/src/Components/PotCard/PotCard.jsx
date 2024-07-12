import React from 'react';
import { Link } from 'react-router-dom';

const PotCard = ({ id, image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to={`/potcard/${id}`} className="text-blue-500 hover:underline">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default PotCard;
