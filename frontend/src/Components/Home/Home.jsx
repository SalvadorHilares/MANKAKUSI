import React from 'react'
import './Home.component.css'
import Banner from '../Banner/Banner'
import Background from '../Background/Background'
import Header from '../Header/Header'
import MainBody from '../MainBody/MainBody'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <Banner title="MANKA KUSI" subtitle="Nuestras ollas en común." 
      backgroundColor="#ff5733" color="#fff" />
      <Background />
      <MainBody />
      <Footer />
    </div>
  )
}

export default Home