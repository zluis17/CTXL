import React, { useState, useEffect } from 'react';
import './../index.css'; // Asegúrate de importar el CSS con las animaciones y estilos del footer

import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp";
import logoTwitter from "../img/1690643591twitter-x-logo-png.webp";
import logoInstagram from "../img/instagram-logo-instagram-icon-transparent-free-png.webp";

// Sample image URLs for the carousel
const imageUrls = [
  'https://i.pinimg.com/736x/1d/88/8e/1d888ed80a217c80daafdd18975fd9c8.jpg',
  'https://i.pinimg.com/564x/18/0a/62/180a6247cceb92d1813a6dd5a58b45b0.jpg',
  'https://i.pinimg.com/564x/02/2a/90/022a90f51857802b7598e10119304b4f.jpg',
];

function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`relative flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col space-y-16">
            <div className="flex items-center justify-center space-x-8">
              <div className="w-1/2 flex justify-center">
                <img src={imageUrls[currentImageIndex]} alt="Imagen 1" className="w-full h-auto rounded-lg shadow-lg transition-transform transform duration-1000" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="text-lg">
                  Nuestros uniformes están diseñados para brindar comodidad y durabilidad. ¡Haz tu pedido hoy y destaca en tu industria con nuestros uniformes personalizados!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-8 flex-row-reverse">
              <div className="w-1/2 flex justify-center">
                <img src={imageUrls[(currentImageIndex + 1) % imageUrls.length]} alt="Imagen 2" className="w-full h-auto rounded-lg shadow-lg transition-transform transform duration-1000" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="text-lg">
                  Ofrecemos uniformes de alta calidad para todo tipo de industrias. Personaliza tu uniforme con tu logotipo y colores corporativos.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="w-1/2 flex justify-center">
                <img src={imageUrls[(currentImageIndex + 2) % imageUrls.length]} alt="Imagen 3" className="w-full h-auto rounded-lg shadow-lg transition-transform transform duration-1000" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="text-lg">
                  La satisfacción del cliente es nuestra prioridad. Contamos con un equipo dedicado a asegurar la mejor calidad en cada producto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex justify-between w-full max-w-6xl mb-4">
            <nav className="flex space-x-4">
              <a href="#about" className="hover:text-gray-300">Sobre Nosotros</a>
              <a href="#services" className="hover:text-gray-300">Servicios</a>
              <a href="#contact" className="hover:text-gray-300">Contacto</a>
              <a href="#privacy" className="hover:text-gray-300">Política de Privacidad</a>
            </nav>
          </div>
          <p className="text-center text-sm mb-4">
            © 2024 Confecciones Textiles. Todos los derechos reservados. Si tienes alguna pregunta, no dudes en contactarnos.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={logoFacebook} alt="Facebook" className="icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={logoInstagram} alt="Instagram" className="icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={logoTwitter} alt="Twitter" className="icon" />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={logoGoogle} alt="Google" className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
