import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4'>
      <div className='container mx-auto text-center'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-2xl hover:text-gray-400' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-2xl hover:text-gray-400' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-2xl hover:text-gray-400' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-2xl hover:text-gray-400' />
          </a>
        </div>
        <p className='text-sm mb-4'>
          Este es un breve texto descriptivo sobre la empresa, su misión y valores. 
          Nos dedicamos a proporcionar soluciones innovadoras que mejoran la vida 
          de las personas. Nuestro compromiso es con la calidad y la excelencia en 
          todos los aspectos de nuestro negocio, asegurando siempre la satisfacción 
          de nuestros clientes y socios.
        </p>
        <div className='mb-4'>
          <p className='text-sm'>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
        <div className='text-sm'>
          <p>Contacto: contacto@tuempresa.com | soporte@tuempresa.com</p>
          <p>Teléfonos: +34 123 456 789 | +34 987 654 321</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
