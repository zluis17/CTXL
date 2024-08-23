import React from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';


const PerfilDetalle = () => {
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
        
        <div className="w-full rounded-lg">
      <div className="bg-black p-6 rounded-t-lg">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="h-16 w-16 rounded-full bg-gray-500 overflow-hidden">
            <img src="/placeholder-user.jpg" alt="User Avatar" className="object-cover h-full w-full" />
          </div>
          <div className="grid gap-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Paco Gertes</h2>
            <div className="text-gray-400">paco69@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 p-8 bg-black rounded-b-lg md:grid-cols-2">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="password" className="text-white">Contraseña</label>
              <input id="password" type="password" defaultValue="********" className="p-2 rounded bg-gray-800 text-white" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="birthdate" className="text-white">Fecha Nacimiento</label>
              <input id="birthdate" type="date" defaultValue="2001-09-11" className="p-2 rounded bg-gray-800 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-white">Celular</label>
              <input id="phone" type="tel" defaultValue="+57 3117275301" className="p-2 rounded bg-gray-800 text-white" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="address" className="text-white">Dirección</label>
              <textarea id="address" defaultValue="Crr69 estes - 68" className="p-2 rounded bg-gray-800 text-white" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Historial Inicio Sesion</h3>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-purple-600">
                <th className="text-white p-2">Fecha</th>
                <th className="text-white p-2">Ubicación</th>
                <th className="text-white p-2">Dispositivo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black hover:bg-purple-600">
                <td className="text-white p-2">2023-04-15 10:30 AM</td>
                <td className="text-white p-2">Bogota, COL</td>
                <td className="text-white p-2">iPhone 12</td>
              </tr>
              <tr className="bg-black hover:bg-purple-600">
                <td className="text-white p-2">2023-04-10 3:45 PM</td>
                <td className="text-white p-2">Bogota, COL</td>
                <td className="text-white p-2">MacBook Pro</td>
              </tr>
              <tr className="bg-black hover:bg-purple-600">
                <td className="text-white p-2">2023-04-05 8:20 AM</td>
                <td className="text-white p-2">Bogota, COL</td>
                <td className="text-white p-2">Samsung Galaxy S22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6 bg-black rounded-b-lg md:flex-row md:justify-end">
        <button className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Cambiar Contraseña</button>
        <button className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Guardar Cambios</button>
      </div>
    </div>
      </main>
    </div>
  );
};

export default PerfilDetalle;
