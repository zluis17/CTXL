import React, { useState } from 'react';
import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp";

function Registro() {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registro con:', { nombres, correo, direccion, contraseña, confirmarContraseña, aceptoTerminos });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-lg bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex mb-6">
            <div className="w-full pr-2">
              <label className="block text-white mb-2" htmlFor="nombres">
                Nombres
              </label>
              <input
                type="text"
                id="nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                className="w-full px-4 py-4 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full pl-2">
              <label className="block text-white mb-2" htmlFor="correo">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full px-4 py-4 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full pr-2">
              <label className="block text-white mb-2" htmlFor="direccion">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full px-4 py-4 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full pl-2">
              <label className="block text-white mb-2" htmlFor="contraseña">
                Contraseña
              </label>
              <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                className="w-full px-4 py-4 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full">
              <label className="block text-white mb-2" htmlFor="confirmar-contraseña">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmar-contraseña"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                className="w-full px-4 py-4 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="acepto-terminos"
              checked={aceptoTerminos}
              onChange={(e) => setAceptoTerminos(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="acepto-terminos" className="text-white">
              Acepto los términos y condiciones
            </label>
          </div>

          <div className="flex mb-6 justify-between">
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-4 rounded-md mx-1">
              <img src={logoGoogle} alt="Google" className="w-6 h-6" />
            </button>
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-4 rounded-md mx-1">
              <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
