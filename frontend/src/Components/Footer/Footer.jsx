import React from 'react';
import './Footer.component.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>hola@email.com</p>
        </div>
        <div className="footer-section">
          <h4>Sobre UNACEM</h4>
          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#press">Prensa</a></li>
            <li><a href="#jobs">Trabaja con nosotros</a></li>
            <li><a href="#terms">Términos y condiciones</a></li>
            <li><a href="#privacy">Política de privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#resources">Recursos Unacem</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Somos un equipo de profesionales que están al servicio de la comunidad
        </p>
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#youtube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;