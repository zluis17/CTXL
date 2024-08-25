import React, { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdHelp } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left Side */}
            <div className="flex items-center">
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer"
                >
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Las Mejores Confecciones{' '}
                    <span className="font-bold">Textiles</span>
                </h1>
            </div>

            {/* Search */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input
                    className="bg-transparent p-2 w-full focus:outline-none"
                    type="text"
                    placeholder="Buscar Uniformes"
                />
            </div>

            {/* Cart Button */}
            <button className="bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full">
                <BsFillCartFill size={20} className="mr-2" /> Carrito
            </button>

            {/* Mobile Menu Overlay */}
            {nav && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"></div>
            )}

            {/* Side Drawer Menu */}
            <div
                className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 ${
                    nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-4">
                    Mejores{' '}
                    <span className="font-bold">Confecciones</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-primary">
                            <TbTruckDelivery
                                size={25}
                                className="mr-4"
                            />
                            Registrarse
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-primary">
                            <TbTruckDelivery
                                size={25}
                                className="mr-4"
                            />
                            Iniciar Sesión
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-primary">
                            <TbTruckDelivery
                                size={25}
                                className="mr-4"
                            />
                            Contacto
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-primary">
                            <MdHelp size={25} className="mr-4" />
                            Ayuda
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
