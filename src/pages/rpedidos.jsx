import React, { useState } from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';


function RPedidos(){
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const toggleInventory = () => {
        setIsInventoryOpen(!isInventoryOpen);
    };
    const toggleRegister = () => {
        setIsRegisterOpen(!isRegisterOpen);
    };
    const [Talla, setTalla] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Bordado, setBordado] = useState('');
    const [Inicial, setInical] = useState('');
    const [Final, setFinal] = useState('');
    const [Administrador, setAdministrador] = useState('');
    const [Empleado, setEmpleado] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('registro con:', { Talla, Cantidad, Bordado, Inicial, Final, Administrador, Empleado });
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
                            className={`w-4 h-4 transform transition-transform duration-300 ${isInventoryOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isInventoryOpen && (
                        <div className="pl-6 mt-2">
                            <a
                                href="#option1"
                                className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                                >
                                Opción 1
                            </a>
                            <a
                                href="#option2"
                                className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                                >
                                Opción 2
                            </a>
                            <a
                                href="#option3"
                                className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                                >
                                Opción 3
                            </a>
                        </div>
                     )}
                    </div>
                    <div>
                        <button
                            onClick={toggleRegister}
                            className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
                            >
                            Registro
                            <svg
                                className={`w-4 h-4 transform transition-transform duration-300 ${isRegisterOpen ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isRegisterOpen && (
                            <div className="pl-6 mt-2">
                                <a
                                    href="#registerOption1"
                                    className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                                    >
                                        Opción de Registro 1
                                </a>
                                <a
                                    href="#registerOption2"
                                    className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                                    >
                                    Opción de Registro 2
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
            {/* Main Content */}
            <main
                className="flex-1 flex flex-col p-10 bg-gray-100 text-white bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImag})` }}
                >
                {/* Content */}
                <div className=" w-3/4 margin-top-20px">
                    <div className="w-1/4 flex">
                        <h1 className="white-space:nowrap text-4xl font-bold">Registro Pedidos</h1>
                        <div className="pl-[120vh]">
                        </div>
                    </div> 
                </div>
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100 p-15 rounded-lg">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro Pedido</h2>
                        <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="flex space-x-4">
                                <div className="w-1/3">
                                  <label className="block text-white mb-2" htmlFor="Talla">
                                    Talla
                                  </label>
                                  <input
                                    type="text"
                                    id="Talla"
                                    value={Talla}
                                    onChange={(e) => setTalla(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                                <div className="w-1/3">
                                  <label className="block text-white mb-2" htmlFor="Cantidad">
                                    Cantidad
                                  </label>
                                  <input
                                    type="number"
                                    id="Cantidad"
                                    value={Cantidad}
                                    onChange={(e) => setCantidad(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                                <div className="w-1/3">
                                  <label className="block text-white mb-2" htmlFor="Bordado">
                                    Bordado
                                  </label>
                                  <input
                                    type="text"
                                    id="Bordado"
                                    value={Bordado}
                                    onChange={(e) => setBordado(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label className="block text-white mb-2" htmlFor="Inicial">
                                    Precio inicial
                                  </label>
                                  <input
                                    type="text"
                                    id="Inicial"
                                    value={Inicial}
                                    onChange={(e) => setInical(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label className="block text-white mb-2" htmlFor="Final">
                                    Precio final
                                  </label>
                                  <input
                                    type="text"
                                    id="Final"
                                    value={Final}
                                    onChange={(e) => setFinal(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="flex space-x-4">
                                <div className="w-1/2">
                                  <label className="block text-white mb-2" htmlFor="Administrador">
                                    Administrador
                                  </label>
                                  <input
                                    type="text"
                                    id="Administrador"
                                    value={Administrador}
                                    onChange={(e) => setAdministrador(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                                <div className="w-1/2">
                                  <label className="block text-white mb-2" htmlFor="Empleado">
                                    Empleado
                                  </label>
                                  <input
                                    type="text"
                                    id="Empleado"
                                    value={Empleado}
                                    onChange={(e) => setEmpleado(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="flex space-x-4">
                                <button
                                  type="button"
                                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                >
                                  Cancelar
                                </button>
                                <button
                                  type="submit"
                                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                >
                                  Registrar
                                </button>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default RPedidos;