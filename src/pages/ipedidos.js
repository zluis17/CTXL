import React, { useState } from "react";
import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp";
import logoTwitter from "../img/1690643591twitter-x-logo-png.webp";
import logoInstagram from "../img/instagram-logo-instagram-icon-transparent-free-png.webp";
import backgroundImag from "../img/121.jpg";

function IPedidos() {
  const [data, setData] = useState([
    { id: 1, product: "Product A", quantity: 10 },
    { id: 2, product: "Product B", quantity: 20 },
    { id: 3, product: "Product C", quantity: 15 },
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
          <h2 className="text-3xl font-bold text-purple-500">App Name</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          <a
            href="#home"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#profile"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Profile
          </a>
          <a
            href="#settings"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Settings
          </a>
          <a
            href="#logout"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Logout
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
      <main className="text-center flex-1 p-10 bg-gray-900 text-white  bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url(${backgroundImag})` }}>
      
        <h1 className="text-4xl font-bold mb-8">Inventario Pedidos</h1>
        
        <div>
        <p className="text-3xl text-left relative top-16 ">   
          Listado:
        </p>
        </div>
        <div>
        <a
            href="#settings"
            className="block text-right text-3xl p-8  hover:text-purple-400 width-50px ">
            Registrar Nuevo 
          </a>
        </div>
      

        {/* Table */}
        <div className="overflow-x-auto mx-auto max-w-4xl">
          <table className="min-w-full bg-gray-800 text-white border border-purple-700 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-700 border-b border-púrple-600 text-2xl">
                <th className="py-1 px-2">ID</th>
                <th className="py-1 px-2">Product</th>
                <th className="py-1 px-2">Quantity</th>
                <th className="py-1 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-purple-600 text-xl">
                  <td className="py-1 px-2">{item.id}</td>
                  <td className="py-1 px-2">{item.product}</td>
                  <td className="py-1 px-2">{item.quantity}</td>
                  <td className="py-1 px-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-blue-400 hover:underline mr-2 text-xl"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 hover:underline text-xl "
                    >   
                      Delete
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

export default IPedidos;
 