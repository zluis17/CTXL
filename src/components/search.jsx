/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import banner from './../img/banner.jpeg';
import { CiSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
      <img src={banner} className='rounded-2xl' />
      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <CiSearch className='text-[20px] text-gray-400' />
        <input type='text' placeholder='search' className='outline-none ml-2' />
      </div>
      <div className='grid grid-cols-3 gap-4 mt-8'>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image1.jpg' alt='Image 1' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 1</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image2.jpg' alt='Image 2' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 2</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image3.jpg' alt='Image 3' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 3</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image4.jpg' alt='Image 4' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 4</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image5.jpg' alt='Image 5' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 5</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image6.jpg' alt='Image 6' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 6</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image7.jpg' alt='Image 7' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 7</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image8.jpg' alt='Image 8' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 8</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/path/to/image9.jpg' alt='Image 9' className='w-24 h-24 object-cover rounded-lg' />
          <p className='mt-2 text-sm text-gray-600'>Descripción 9</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
