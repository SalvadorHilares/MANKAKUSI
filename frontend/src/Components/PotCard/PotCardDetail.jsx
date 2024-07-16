import { useState } from 'react';
import { useParams } from 'react-router-dom';
import potcards from '../../datos.json';

const PotCardDetail = () => {
  const { id } = useParams();
  const item = potcards.find(potcard => potcard.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad de productos seleccionados

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  // Ajusta la ruta de la imagen para que comience con /src/images/
  const imageUrl = item.image.replace(/^\.\//, '/');

  const handlePaymentRedirect = () => {
    window.location.href = 'https://www.pasarelapago.com';
  };

  // Funciones para incrementar y decrementar la cantidad de productos
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = parseInt(item.price) * quantity; // Calcular el precio total

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-5 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className='mb-1 text-center'>
              <button
                onClick={() => window.history.back()}
                className="mb-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Volver
              </button>
            </div>
            <div className="flex justify-between items-center p-4">
              <button onClick={decrementQuantity} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
              <span className="text-xl font-bold">{quantity} Productos seleccionados</span>
              <button onClick={incrementQuantity} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
            <div className="text-center text-2xl font-bold mb-4">Precio Total: S/.{totalPrice}</div>
            <div className="flex flex-col md:flex-row items-center">
              <img src={imageUrl} alt={item.title} className="w-full md:w-1/2 h-48 object-cover mb-4 md:mb-0" />
              <div className="flex flex-col justify-center p-4 w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-2 text-center md:text-left">{item.title}</h2>
                <p className="text-lg text-gray-700 mb-2 text-center md:text-left">{item.description}</p>
                <div className="bg-gray-100 shadow-inner text-center rounded-lg p-4 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-center">Precio unitario: S/.{item.price}</h3>
                  <button
                    onClick={handlePaymentRedirect}
                    className="mb-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Pago en linea
                  </button>
                  <p className="text-base text-gray-700 mb-2 text-center">Escanee el código QR para pagar</p>
                  <div className="flex justify-center">
                    <img src="/src/images/pruebaYAPE.jpeg" alt="QR Code" className="w-32 h-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotCardDetail;
