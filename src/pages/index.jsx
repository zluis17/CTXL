import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />

            {/* Texto descriptivo debajo de la Navbar */}
            <section className="text-center py-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué Hacemos?</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    En TextileUniforms, nos especializamos en la confección de uniformes de alta calidad para diversas industrias. 
                    Utilizamos materiales premium que ofrecen comodidad, durabilidad y estilo, asegurando que cada uniforme esté diseñado 
                    para satisfacer las necesidades específicas de nuestros clientes.
                </p>
            </section>

            {/* Sección para las imágenes en 9 campos separados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 px-4">
                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image1.jpg"
                        alt="Uniforme 1"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 1: Hecho con algodón 100% y telas sintéticas de alta calidad.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image2.jpg"
                        alt="Uniforme 2"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 2: Hecho con poliéster y fibras resistentes al desgaste.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image3.jpg"
                        alt="Uniforme 3"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 3: Diseñado con mezclas de lana para mayor comodidad.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image4.jpg"
                        alt="Uniforme 4"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 4: Tela de alta durabilidad y resistencia al desgaste.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image5.jpg"
                        alt="Uniforme 5"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 5: Combinación de algodón y poliéster para mayor flexibilidad.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image6.jpg"
                        alt="Uniforme 6"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 6: Ideal para climas cálidos, hecho de materiales ligeros.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image7.jpg"
                        alt="Uniforme 7"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 7: Tela transpirable con protección UV.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image8.jpg"
                        alt="Uniforme 8"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 8: Confeccionado con tejidos de secado rápido.</p>
                    </div>
                </div>

                <div className="relative group flex justify-center items-center overflow-hidden cursor-pointer">
                    <img
                        src="/path/to/image9.jpg"
                        alt="Uniforme 9"
                        className="object-cover h-48 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center p-4">
                        <p className="text-sm">Uniforme 9: Material resistente al agua, perfecto para exteriores.</p>
                    </div>
                </div>
            </div>

            {/* Sección de Testimonios */}
            <section className="bg-white py-8">
                <h2 className="text-3xl font-bold text-center mb-6">Lo que dicen nuestros clientes</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 shadow-lg">
                        <p className="text-gray-600">"Los uniformes de TextileUniforms son de la más alta calidad. Estamos muy satisfechos con su durabilidad y comodidad."</p>
                        <p className="text-gray-800 font-bold mt-4">- Empresa XYZ</p>
                    </div>
                    <div className="p-4 shadow-lg">
                        <p className="text-gray-600">"Excelente servicio y productos. Nuestros empleados están encantados con sus nuevos uniformes."</p>
                        <p className="text-gray-800 font-bold mt-4">- Empresa ABC</p>
                    </div>
                    <div className="p-4 shadow-lg">
                        <p className="text-gray-600">"Recomendaría TextileUniforms a cualquier negocio que busque uniformes de calidad."</p>
                        <p className="text-gray-800 font-bold mt-4">- Empresa LMN</p>
                    </div>
                </div>
            </section>

            {/* Sección de Servicios */}
            <section className="py-8 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-6">Nuestros Servicios</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Confección Personalizada</h3>
                        <p className="text-gray-600">Diseñamos y confeccionamos uniformes según tus especificaciones y necesidades.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Entrega Rápida</h3>
                        <p className="text-gray-600">Ofrecemos tiempos de entrega rápidos para que recibas tus uniformes cuando los necesites.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Atención al Cliente</h3>
                        <p className="text-gray-600">Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier consulta o necesidad.</p>
                    </div>
                </div>
            </section>

            {/* Llamada a la Acción (CTA) */}
            <section className="bg-primary text-white py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">¿Listo para personalizar tus uniformes?</h2>
                <p className="mb-8">Contacta con nosotros hoy mismo para obtener una cotización personalizada y descubrir cómo podemos ayudarte a mejorar la apariencia de tu equipo.</p>
                <a href="#contact" className="bg-white text-primary font-bold py-3 px-6 rounded-full inline-block">Contáctanos</a>
            </section>

            {/* Galería de Proyectos */}
            <section className="py-8">
                <h2 className="text-3xl font-bold text-center mb-6">Nuestros Proyectos</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="overflow-hidden">
                        <img src="/path/to/project1.jpg" alt="Proyecto 1" className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"/>
                    </div>
                    <div className="overflow-hidden">
                        <img src="/path/to/project2.jpg" alt="Proyecto 2" className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"/>
                    </div>
                    <div className="overflow-hidden">
                        <img src="/path/to/project3.jpg" alt="Proyecto 3" className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"/>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
