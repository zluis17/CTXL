import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


function Rproductos(){
 
  
    const [Cantidad, setCantidad] = useState('');
    const [Material, setMaterial] = useState('');
    const [Color, setColor] = useState('');
    const [Administrador] = useState('');
    const [Proveedor] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('registro con:', { Cantidad, Material, Color, Administrador, Proveedor });
    };
    return (
        <div className="flex h-screen">
            {/* Sidebar */}

            {/* Main Content */}
            <main
                className="flex-1 flex flex-col p-10 bg-gray-100 text-white bg-cover bg-no-repeat"
                >
                {/* Content */}
                <div className=" w-3/4 margin-top-20px">
                    <div className="w-1/4 flex">
                        <h1 className="white-space:nowrap text-4xl font-bold">Registro productos</h1>
                        <div className="pl-[120vh]">
                        </div>
                    </div> 
                </div>
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registrar producto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="flex flex-col space-y-4">
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                                        <input
                                            type="number"
                                            id="Cantidad"
                                            value={Cantidad}
                                            onChange={(e) => setCantidad(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Material">Material</label>
                                        <input
                                            type="text"
                                            id="Material"
                                            value={Material}
                                            onChange={(e) => setMaterial(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Color">Color</label>
                                        <input
                                            type="text"
                                            id="Color"
                                            value={Color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                    
                                </div>
                                <div className="flex space-x-4">
                                <Link
                                to="/app/iproducto">
                                <button
                                    type="button"
                                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                    >
                                    Cancelar
                                </button>
                                 </Link>
                                    <button
                                        type="submit"
                                        className="w-1/2 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
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
export default Rproductos;