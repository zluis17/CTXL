import React, { useState } from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';


const MiComponente = () => {
  return (
    <div className="relative">
      {/* Fondo con cuadrícula */}
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#0f0f10_1px,_transparent_1px),_linear-gradient(to_bottom,#0f0f10_1px,_transparent_1px)] bg-[size:1rem_1rem] bg-center filter blur-sm"></div>

      {/* Contenedor principal */}
      <div id="poda" className="flex items-center justify-center relative">
        {/* Elementos con filtros y desenfoque */}
        <div className="absolute inset-0 z-[-1] filter blur-md max-w-[314px] max-h-[70px] rounded-lg bg-white"></div>
        <div className="absolute inset-0 z-[-1] filter blur-sm max-w-[314px] max-h-[70px] rounded-lg bg-[#18116a]"></div>
        <div className="absolute inset-0 z-[-1] filter blur-sm max-w-[314px] max-h-[70px] rounded-lg bg-[#1c191c]"></div>
        <div className="absolute inset-0 z-[-1] filter blur-sm max-w-[314px] max-h-[70px] rounded-lg bg-[#000] opacity-40"></div>

        {/* Contenedor del input */}
        <div id="main" className="relative">
          <input
            placeholder="Buscar..."
            type="text"
            name="text"
            className="bg-[#010201] border-bg-[#8922C0] w-[301px] h-[56px] rounded-lg text-white pl-[59px] pr-4 text-lg"
          />
          <div id="input-mask" className="absolute w-[100px] h-[20px] bg-gradient-to-r from-transparent to-purple-600 top-[18px] left-[70px] pointer-events-none"></div>
          <div id="pink-mask" className="absolute w-[30px] h-[20px] bg-[#8922C0] top-[10px] left-[5px] filter blur-[20px] opacity-80 transition-all duration-200  to-purple-600"></div>
          <div id="filter-icon" className="absolute top-[7px] right-[7px] w-[40px] h-[42px] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#8922C0] to-[#8922C0]">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M8.16 6.65H15.83C16.47 6.65 16.99 7.17 16.99 7.81V9.09C16.99 9.56 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55 7 9.2V7.87C7 7.17 7.52 6.65 8.16 6.65Z" stroke="#d6d6e6"></path>
            </svg>
          </div>
          <div id="search-icon" className="absolute top-4 left-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" stroke="url(#search)"></circle>
              <line x1="22" y1="22" x2="16.65" y2="16.65" stroke="url(#searchl)"></line>
              <defs>
                <linearGradient id="search" gradientTransform="rotate(50)">
                  <stop offset="0%" stopColor="#f8e7f8"></stop>
                  <stop offset="50%" stopColor="#b6a9b7"></stop>
                </linearGradient>
                <linearGradient id="searchl">
                  <stop offset="0%" stopColor="#b6a9b7"></stop>
                  <stop offset="50%" stopColor="#837484"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

function Iproducto() {
  const [data, setData] = useState([
    {
      id: 1,
      cantidad: 10,
      material: 'Lana',
      color: 'Rojo',
    },
    {
      id: 2,
      cantidad: 20,
      material: 'Algodón',
      color: 'Azul',
    },
    {
      id: 3,
      cantidad: 15,
      material: 'Seda',
      color: 'Verde',
    },
  ]);

  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit item with ID ${id}`);
  };

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

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
              onClick={toggleInventory}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
            >
              Inventarios
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isInventoryOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isInventoryOpen && (
              <div className="pl-6 mt-2">
                <a
                 href="#option2"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300" 
                >
                  Inventario Pedidos
                </a>
                <a
                 href="#option2"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300" 
                >
                  Inventario Material
                </a>
                <a
                  href="#option2"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Inventario Proveedores
                </a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleRegister}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
            >
              Registros
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isRegisterOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isRegisterOpen && (
              <div className="pl-6 mt-2">
                <a
                  href="#option3"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Pedido
                </a>
                <a
                  href="#option4"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Material
                </a>
                <a
                  href="#option4"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Proveedores
                </a>
              </div>
            )}
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

      
      <main
                className="flex-1 flex flex-col p-10 bg-gray-100 text-white bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImag})` }}
                >
        {/* Content */}
        <div className=" w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="text-4xl font-bold whitespace-nowrap">
              Inventario Material
            </h1>
            <div className="pl-[120vh]">
              <MiComponente />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-3xl text-left relative top-16">Listado:</div>
          </div>
          <div>
            <a
              href="#settings"
              className="block text-right text-3xl p-8 hover:text-purple-400"
            >
              Registrar Nuevo
            </a>
          </div>
        </div>

        <div className="overflow-x-auto bg-white border border-purple-200 shadow-2xl shadow-purple-600/100">
          <table className="border-r border-l  border-purple-600 w-full bg-black  overflow-hidden">
            <thead className="bg-purple-600 text-white border-b border-white ">
            <tr>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Material</th>
                <th className="p-4">Color</th>
                <th className="p-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((item) => (
                <tr key={item.id} className=" border-r border-b border-white ">
                  <td className="p-4 border-b">{item.cantidad}</td>
                  <td className="p-4 border-b">{item.material}</td>
                  <td className="p-4 border-b">{item.color}</td>
                  <td className="p-4 border-b">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-purple-600 text-white px-3 py-1 rounded-lg"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Iproducto;