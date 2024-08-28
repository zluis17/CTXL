import React, { useState } from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';

const Home = () => {
  // Estadísticas de ventas
  const salesData = [
    { label: 'Enero', value: 1500000, percentage: 0.8 },
    { label: 'Febrero', value: 1800000, percentage: 0.9 },
    { label: 'Marzo', value: 2200000, percentage: 1.1 },
    { label: 'Abril', value: 2000000, percentage: 1.0 },
    { label: 'Mayo', value: 2500000, percentage: 1.25 },
    { label: 'Junio', value: 2800000, percentage: 1.4 },
  ];

  // Otras estadísticas
  const otherStats = [
    { label: 'Ventas Totales', value: 12000000 },
    { label: 'Pedidos Completados', value: 850 },
  ];

  // Estado para controlar la visibilidad de los submenús
  const [showInventoriesSubmenu, setShowInventoriesSubmenu] = useState(false);
  const [showRegistroSubmenu, setShowRegistroSubmenu] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">CTXL</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          <a href="#home" className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
            Inicio
          </a>
          <a href="#profile" className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
            Perfil
          </a>
          <div>
            <button
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
              onClick={() => setShowInventoriesSubmenu(!showInventoriesSubmenu)}
            >
              Inventarios
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  showInventoriesSubmenu ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showInventoriesSubmenu && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Inventario de Pedidos
                </a>
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Inventario de Material
                </a>
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Inventario de Empleados
                </a>
              </div>
            )}
          </div>
          <div>
            <button
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
              onClick={() => setShowRegistroSubmenu(!showRegistroSubmenu)}
            >
              Registro
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  showRegistroSubmenu ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showRegistroSubmenu && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Registro de Pedido
                </a>
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Registro de Material
                </a>
                <a href="#" className="block p-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
                  Registro de Empleados
                </a>
              </div>
            )}
          </div>
        </nav>
        {/* Social Media Icons */}
        <div className="flex justify-center p-6 space-x-4 mt-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300">
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300">
            <img src={logoInstagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300">
            <img src={logoTwitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300">
            <img src={logoGoogle} alt="Google" className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-10 bg-gray-900 text-white bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImag})` }}>
        <div className="w-full max-w-6xl mx-auto">
          {/* Bienvenida al administrador */}
          <h1 className="text-4xl font-bold mb-6">¡Bienvenido Administrador!</h1>
          <p className="text-xl mb-8">
            Aquí podrás ver un resumen de las estadísticas de ventas y otros datos importantes para tu negocio.
          </p>

          {/* Estadísticas de ventas */}
          <h2 className="text-3xl font-bold mb-4">Estadísticas de Ventas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {salesData.map((sale, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{sale.label}</h3>
                <p className="text-4xl font-bold">$COP {sale.value.toLocaleString()}</p>
                <p className={`text-lg ${sale.percentage > 1 ? 'text-green-500' : 'text-red-500'}`}>
                  {sale.percentage > 1 ? `+${(sale.percentage * 100 - 100).toFixed(2)}%` : `${(sale.percentage * 100 - 100).toFixed(2)}%`}
                </p>
              </div>
            ))}
          </div>

          {/* Otras estadísticas */}
          <h2 className="text-3xl font-bold mb-4">Otras Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherStats.map((stat, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{stat.label}</h3>
                <p className="text-4xl font-bold">{stat.label === 'Ventas Totales' ? `$COP ${stat.value.toLocaleString()}` : stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;