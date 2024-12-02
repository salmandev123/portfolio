import React from 'react'
import bg1 from '../Images/bg-2.png'
import bg2 from '../Images/bg3.png'
import bg3 from '../Images/bg4.png'
import bg4 from '../Images/bg5.png'
import bg5 from '../Images/bg6.png'

export default function About() {
  return (
    <div className='bg-black'>
      <h2 className='text-white text-3xl font-bold pt-20 ml-12 sm:ml-6 text-center sm:text-left'>
        BEST SELLERS
      </h2>
      <div className='bg-black w-full min-h-[650px] flex flex-wrap justify-center gap-4 pt-10 pb-16 sm:gap-6'>

        {/** Card Data */}
        {[
          { title: 'Krunch Burger', price: 'Rs230', img: bg1 },
          { title: 'Kruch Combo', price: 'Rs590', img: bg2 },
          { title: 'Chicken & Chips', price: 'Rs620', img: bg3 },
          { title: 'Hot Wings Bucket', price: 'Rs870', img: bg4 },
          { title: 'Mighty Zinger', price: 'Rs770', img: bg5 }
        ].map((item, index) => (
          <div key={index} className='cards bg-[#1C1816] h-auto w-[280px] rounded-sm flex flex-col items-center'>
            <div className='text-center space-x-3 mt-4'>
              <span className='box bg-[#EA002A] text-[#EA002A]'>11</span>
              <span className='box bg-[#EA002A] text-[#EA002A]'>11</span>
              <span className='box bg-[#EA002A] text-[#EA002A]'>11</span>
            </div>
            <h2 className='text-2xl text-white font-bold pt-4'>{item.title}</h2>
            <span className='box bg-[#EA002A] text-white mt-2 font-bold text-2xl px-4'>
              {item.price}
            </span>
            <a href=''>
              <img src={item.img} alt={item.title} className='h-auto w-72 mt-4 mb-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
