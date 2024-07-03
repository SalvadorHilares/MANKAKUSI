import React from 'react'
import './Banner.component.css'

const Banner = ({ title = "Welcome to My Website", subtitle = "Your subtitle here", backgroundColor = "#282c34", color = "#fff" }) => {
  const bannerStyle = {
    backgroundColor,
    color,
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={bannerStyle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Banner