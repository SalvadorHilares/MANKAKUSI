import React from 'react';

const Background = () => {
    return (
        <div className="relative w-full h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("./src/images/BANNER.jpeg")' }}
        >
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
                <h2 className="text-4xl text-white font-bold mb-4">PROMOCIONES TODOS LOS FINES DE SEMANA</h2>
                <p className="text-lg text-white">Ver promocion</p>
            </div>
        </div>
    );
}

export default Background;
