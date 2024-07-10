import React, { useEffect, useState } from 'react'
import './MainBody.component.css'
import datos from '../../../datos.json'
import PotCard from '../PotCard/PotCard';

const MainBody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datos);
  }, [])
  return (
    <main className="main-content p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item, index) => (
        <PotCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </main>
  )
}

export default MainBody