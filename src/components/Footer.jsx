import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sección de Contacto */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <p className="mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
                        <p className="mb-2">Teléfono: +123 456 789</p>
                        <p className="mb-2">Email: contacto@textileuniforms.com</p>
                    </div>

                    {/* Sección de Correos */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Suscríbete</h3>
                        <p className="mb-4">Recibe las últimas novedades, ofertas especiales y mucho más.</p>
                        <form>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full p-2 rounded-md text-gray-800"
                            />
                            <button type="submit" className="mt-2 w-full bg-primary text-white py-2 rounded-md">
                                Suscribirse
                            </button>
                        </form>
                    </div>

                    {/* Enlaces útiles */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces útiles</h3>
                        <ul>
                            <li className="mb-2"><a href="#about" className="hover:underline">Sobre nosotros</a></li>
                            <li className="mb-2"><a href="#services" className="hover:underline">Servicios</a></li>
                            <li className="mb-2"><a href="#faq" className="hover:underline">Preguntas frecuentes</a></li>
                            <li className="mb-2"><a href="#contact" className="hover:underline">Contáctanos</a></li>
                            <li className="mb-2"><a href="#privacy" className="hover:underline">Política de privacidad</a></li>
                        </ul>
                    </div>
                </div>

                {/* Redes sociales */}
                <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
                    <p className="text-sm">&copy; 2024 TextileUniforms. Todos los derechos reservados.</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-primary" aria-label="Facebook">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.12 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.5 1.5-3.87 3.74-3.87 1.07 0 2.19.19 2.19.19v2.42h-1.23c-1.21 0-1.59.76-1.59 1.53v1.94h2.71l-.43 2.9h-2.28v6.98c4.78-.76 8.44-4.89 8.44-9.88z" /></svg>
                        </a>
                        <a href="https://twitter.com" className="hover:text-primary" aria-label="Twitter">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6.03c-.77.34-1.61.57-2.48.67.89-.54 1.58-1.4 1.9-2.42-.83.5-1.75.86-2.73 1.06-.78-.84-1.9-1.36-3.14-1.36-2.38 0-4.3 1.91-4.3 4.28 0 .34.04.67.11.99-3.58-.18-6.77-1.89-8.9-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.88 3.56-.7-.02-1.35-.21-1.92-.53v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.1 2.91 3.96 2.94-1.45 1.14-3.27 1.81-5.26 1.81-.34 0-.67-.02-1-.06 1.88 1.2 4.11 1.91 6.5 1.91 7.8 0 12.07-6.46 12.07-12.06 0-.18 0-.36-.01-.53.83-.6 1.54-1.34 2.1-2.19z" /></svg>
                        </a>
                        <a href="https://instagram.com" className="hover:text-primary" aria-label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2c-1.5 0-2.5.16-3.45.65a5.72 5.72 0 0 0-2.65 2.65c-.49.95-.65 1.95-.65 3.45v8.5c0 1.5.16 2.5.65 3.45a5.72 5.72 0 0 0 2.65 2.65c.95.49 1.95.65 3.45.65h8.5c1.5 0 2.5-.16 3.45-.65a5.72 5.72 0 0 0 2.65-2.65c.49-.95.65-1.95.65-3.45v-8.5c0-1.5-.16-2.5-.65-3.45a5.72 5.72 0 0 0-2.65-2.65c-.95-.49-1.95-.65-3.45-.65h-8.5zm-.25 2h9c1.32 0 2.05.14 2.62.4.61.31 1.05.76 1.36 1.36.26.57.4 1.3.4 2.62v9c0 1.32-.14 2.05-.4 2.62a3.72 3.72 0 0 1-1.36 1.36c-.57.26-1.3.4-2.62.4h-9c-1.32 0-2.05-.14-2.62-.4a3.72 3.72 0 0 1-1.36-1.36c-.26-.57-.4-1.3-.4-2.62v-9c0-1.32.14-2.05.4-2.62a3.72 3.72 0 0 1 1.36-1.36c.57-.26 1.3-.4 2.62-.4zm7.75 2a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 2a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5zm5.25-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
                        </a>
                        <a href="https://linkedin.com" className="hover:text-primary" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 22h4V7h-4v15zm7.5 0h4v-7.35c0-.87.02-1.98 1.2-1.98 1.21 0 1.4 1.04 1.4 2.1V22h4v-8.43c0-2.02-.39-3.58-2.52-3.58-1.08 0-1.8.6-2.1 1.17h-.03v-1h-4v11.84z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
