import React from 'react';

const Background = () => {
    return (
        <div className="relative w-full h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("../../images/MankaKusi.svg")' }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
                <h2 className="text-4xl text-white font-bold mb-4">Background</h2>
                <p className="text-lg text-white">This component has a background image.</p>
            </div>
        </div>
    );
}

export default Background;
