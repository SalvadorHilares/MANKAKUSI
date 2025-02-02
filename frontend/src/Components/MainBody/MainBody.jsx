import React, { useEffect, useState } from 'react';
import datos from '../../datos.json';
import PotCard from '../PotCard/PotCard';

const MainBody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datos);
  }, []);

  return (
    <main className="main-content p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <PotCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </main>
  );
};

export default MainBody;
