import React from 'react';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';

const Index = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
     

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
