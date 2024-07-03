import React from 'react'
import './MainBody.component.css'

const MainBody = () => {
  return (
    <main className="main-content">
      <section className="promotion">
        <div className="promotion-details">
          <h2>Smartphone Galaxy A05</h2>
          <p>s/359</p>
        </div>
        <img src="./src/images/Imagen1.jpeg" alt="Smartphone Galaxy A05" />
      </section>
      <section className="promotion">
        <div className="promotion-details">
          <h2>Smartphone Moto G04S</h2>
          <p>s/479</p>
        </div>
        <img src="./src/images/Imagen2.jpeg" alt="Smartphone Moto G04S" />
      </section>
    </main>
  )
}

export default MainBody