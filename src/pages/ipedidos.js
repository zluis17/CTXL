import React, { useState } from "react";
import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp";
import logoTwitter from "../img/1690643591twitter-x-logo-png.webp";
import logoInstagram from "../img/instagram-logo-instagram-icon-transparent-free-png.webp";
import backgroundImag from "../img/imagen1.jpg";

// Estilos CSS personalizados para las animaciones
const styles = `
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes typeAndDelete {
    0%, 10% {
      width: 0;
    }
    45%, 55% {
      width: 6.2em; /* ajusta el ancho según el contenido */
    }
    90%, 100% {
      width: 0;
    }
  }

  .animate-blinkCursor {
    animation: blinkCursor 0.5s step-end infinite alternate;
  }

  .animate-typeAndDelete {
    animation: typeAndDelete 4s steps(11) infinite;
  }
`;

const TerminalLoader = () => {
  return (
    <div className="border border-gray-800 bg-gray-900 text-green-400 font-mono text-sm p-6 w-48 mx-auto mt-24 shadow-lg rounded relative overflow-hidden">
      <style>{styles}</style>
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t px-1 flex items-center">
        <div className="text-gray-200 text-sm">Status</div>
        <div className="ml-auto flex">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 mx-1"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mx-1"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-600 mx-1"></div>
        </div>
      </div>
      <div className="mt-6 text-xs whitespace-nowrap overflow-hidden border-r-2 border-green-400 animate-typeAndDelete animate-blinkCursor">
        Loading...
      </div>
    </div>
  );
};

function IPedidos() {
  const [data, setData] = useState([
    { id: 1, producto: "Product A", cantidad: 10 },
    { id: 2, producto: "Product B", cantidad: 20 },
    { id: 3, producto: "Product C", cantidad: 15 },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    alert(`Edit item with ID ${id}`);
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
          <a
            href="#settings"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Inventarios
          </a>
          <a
            href="#logout"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Registros
          </a>
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
      <main className="flex-1 flex flex-col p-10 bg-gray-900 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImag})` }}>
        <div className="flex">
          {/* TerminalLoader */}
          

          {/* Content */}
          <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-8">Inventario Pedidos</h1>
            <div className="w-1/4 align-right ">
            <TerminalLoader />
            </div>
            <div>
              <p className="text-3xl text-left relative top-16">Listado:</p>
            </div>
            <div>
              <a
                href="#settings"
                className="block text-right text-3xl p-8 hover:text-purple-400 width-50px"
              >
                Registrar Nuevo
              </a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mx-auto max-w-4xl">
              <table className="min-w-full bg-black text-white border rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-purple-700 border-b border-bg-black text-2xl">
                    <th className="py-1 px-2">ID</th>
                    <th className="py-1 px-2">Producto</th>
                    <th className="py-1 px-2">Cantidad</th>
                    <th className="py-1 px-2">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b border-purple-600 text-xl">
                      <td className="py-1 px-2">{item.id}</td>
                      <td className="py-1 px-2">{item.producto}</td>
                      <td className="py-1 px-2">{item.cantidad}</td>
                      <td className="py-1 px-2">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-400 hover:underline mr-2 text-xl"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-400 hover:underline text-xl"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IPedidos;
