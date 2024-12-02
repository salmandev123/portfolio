import React from 'react';
import b1 from '../Images/last1.png';
import b2 from '../Images/last2.png';
import b3 from '../Images/last3.png';
import bg4 from '../Images/mg4.png';

export default function Images() {
  return (
    <div className='bg-black h-[900%] pb-14'>
      <div className='flex flex-col sm:flex-row justify-center gap-10'>
        <a href="">
          <img src={b1} alt="image" className='h-[300px] sm:h-[600px] w-[90%] sm:w-[600px] rounded-xl mx-auto' />
        </a>
        <img src={b2} alt="" className='h-[300px] sm:h-[600px] w-[90%] sm:w-[600px] rounded-lg mx-auto' />
      </div>

      <div className='flex flex-col sm:flex-row justify-center gap-10 mt-10'>
        <a href="">
          <img src={b3} alt="" className='h-[200px] sm:h-[370px] w-[90%] sm:w-[600px] rounded-lg mx-auto' />
        </a>
        <div className='bg-[#1C1816] h-[200px] sm:h-[370px] w-[90%] sm:w-[600px] rounded-lg mx-auto'>
          <img src={bg4} alt="" className='h-[100px] sm:h-[150px] w-[60%] sm:w-[200px] ml-auto sm:ml-44 mb-1' />
          <h2 className='text-white font-bold text-sm sm:text-xl ml-4 sm:ml-2 mt-6'>
            Adding 11 herbs and spices, Explore our menu and add items{' '}
            <span className='sm:ml-52'>to your cart</span>.
          </h2>
          <button className='bg-[#EA002A] font-bold text-sm sm:text-2xl text-white rounded-lg px-4 sm:px-5 py-2 sm:py-3 ml-auto sm:ml-36 mt-6'>
            EXPLORE MENU
          </button>
        </div>
      </div>
    </div>
  );
}
