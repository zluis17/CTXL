import React from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';

const Index = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">CTXL</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          <a
            href="#home"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#profile"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Perfil
          </a>
          <div>
            <button
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
            >
              Inventarios
              <svg
                className="w-4 h-4 transform transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div>
            <button
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
            >
              Registro
              <svg
                className="w-4 h-4 transform transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Social Media Icons */}
        <div className="flex justify-center p-6 space-x-4 mt-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoInstagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoTwitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoGoogle} alt="Google" className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 flex flex-col p-10 bg-gray-900 text-white bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImag})` }}
      >
        {/* Content */}
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-8">Bienvenido a CTXL</h1>
          <p className="text-xl mb-6">
            Este es el panel principal donde podrás gestionar tus inventarios, 
            realizar registros y revisar el estado de tus pedidos. Usa la barra 
            lateral para navegar entre las diferentes opciones y administrar tu 
            contenido de manera eficiente.
          </p>
          <p className="text-xl">
            Comienza seleccionando una opción del menú o consulta el inventario 
            y pedidos actuales para ver las últimas actualizaciones.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
