import React from 'react'

function header() {
  return (
    <div className='flex justify-between items-center'>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Iniciar Sesión</li>
            <li className='hover:font-bold cursor-pointer'>Registrarse</li>


        </ul>
    </div>
  )
}

export default header