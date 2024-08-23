
import React from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import backgroundImag from '../img/imagen1.jpg';
import '../index.css';
import { CameraIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Input } from '../components/Input';
import { Label } from '../components/Label';


const Perfil = () => {
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
        
        <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Perfil usuario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                <CameraIcon className="w-8 h-8 text-gray-400" />
              </div>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
                <CameraIcon className="w-4 h-4" />
                <span className="sr-only">Subir foto</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-white">Nombre</Label>
              <Input id="nombre" placeholder="Nombre" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido" className="text-white">Apellido</Label>
              <Input id="apellido" placeholder="Apellido" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="correo" className="text-white">Correo</Label>
              <Input id="correo" placeholder="Correo" type="email" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contrasena" className="text-white">Contraseña</Label>
              <Input id="contrasena" placeholder="Contraseña" type="password" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-white">Teléfono</Label>
              <Input id="telefono" placeholder="Teléfono" type="tel" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="direccion" className="text-white">Dirección</Label>
              <Input id="direccion" placeholder="Dirección" className="bg-gray-800 text-white border-gray-700" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fecha-nacimiento" className="text-white">Fecha de nacimiento</Label>
            <Input id="fecha-nacimiento" type="date" className="bg-gray-800 text-white border-gray-700" />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" className="bg-gray-800 text-white border-gray-700 hover:bg-purple-600">Cancelar</Button>
            <Button className="bg-black text-white hover:bg-purple-600">Actualizar</Button>
          </div>
        </CardContent>
      </Card>
    </div>

      </main>
    </div>
  );
};

export default Perfil;
