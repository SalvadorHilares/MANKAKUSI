import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="footer-section">
          <h4 className="text-xl font-bold">Contacto</h4>
          <p className="mt-2">hola@email.com</p>
        </div>
        <div className="footer-section">
          <h4 className="text-xl font-bold">Sobre UNACEM</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:text-gray-400">Nosotros</a></li>
            <li><a href="#partners" className="hover:text-gray-400">Partners</a></li>
            <li><a href="#press" className="hover:text-gray-400">Prensa</a></li>
            <li><a href="#jobs" className="hover:text-gray-400">Trabaja con nosotros</a></li>
            <li><a href="#terms" className="hover:text-gray-400">Términos y condiciones</a></li>
            <li><a href="#privacy" className="hover:text-gray-400">Política de privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="text-xl font-bold">Recursos</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#resources" className="hover:text-gray-400">Recursos Unacem</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom mt-5 border-t border-gray-700 pt-5 text-center md:text-left">
        <p>Somos un equipo de profesionales que están al servicio de la comunidad</p>
        <div className="social-icons flex justify-center md:justify-start space-x-4 mt-2">
          <a href="#facebook" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#youtube" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
