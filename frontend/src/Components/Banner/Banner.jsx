import React from 'react';

const Banner = ({ title = "Welcome to My Website", subtitle = "Your subtitle here", backgroundColor = "bg-gray-800", color = "text-white" }) => {
  return (
    <div className={`p-5 text-center ${backgroundColor} ${color}`}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2">{subtitle}</p>
    </div>
  );
};

export default Banner;
