import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdHelp } from 'react-icons/md'

const navbar = () => {
const [av, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div  className='flex items-center'>   
        <div onClick ={()=>setNav(!nav)}className='cursor-pointer'>
        <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Las Mejores Confecciones 
            <span className='font-bold'>Textiles</span>
        </h1>   
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>

        </div>

        </div>
        {/*Search */}

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full' type="text" placeholder='Buscar Uniformes' />
        </div>

        {/* button*/}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>
         {/* Menu Movil*/}
        {/* Overlay*/}
        {nav ?    <div className='bg-black/80 fixed  w-full h-screen z-10 top-left-0'>:'' }
     
        {/* side menu*/}
        <div className={nav ? 'fixed op-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose onClick={()=> setNav(!Nav)}            size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Mejores  <span className='font-old'>Confecciones</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800 '>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Registrarse</li>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Iniciar Sesión</li>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Contacto</li>
                    <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Ayuda</li>
                    
                </ul>
            </nav>

        </div>


        </div>
    </div>
        
  )
}

export default navbar