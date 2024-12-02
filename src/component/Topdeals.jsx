import React from 'react';
import bg1 from '../Images/kfc1.png';
import bg2 from '../Images/kfc2.png';
import bg3 from '../Images/kfc3.png';
import bg4 from '../Images/kfc4.png';

export default function Topdeals() {
    return (
        <div className='bg-black'>
            <h2 className='text-white text-3xl font-bold pb-12 ml-6 sm:ml-24'>TOP DEALS</h2>

            <div className='bg-black h-auto flex flex-wrap justify-center gap-5 sm:gap-10 pb-20'>
                <div className="cards bg-[#1C1816] h-auto sm:h-[470px] w-[90%] sm:w-[300px] rounded-lg text-wrap p-4">
                    <div className="text-center space-x-3 mb-4">
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                    </div>

                    <div>
                        <a href="">
                            <img src={bg1} alt="" className='h-auto w-full rounded' />
                        </a>
                    </div>
                    <div className='text-white mt-4'>
                        <h1 className='text-xl font-bold'>Zinger Staker Combo</h1>
                        <h3 className='font-medium mt-2'>1 Zinger Staker + 1 Regular Fries + 1 <br /> Regular Drink</h3>
                        <h2 className='text-lg font-bold mt-1'>Rs 950</h2>
                    </div>

                    <button className='bg-[#EA002A] font-bold text-white rounded-lg px-4 py-2 mt-6 block mx-auto hover:bg-white hover:text-[#EA002A]'>
                        + ADD TO BUCKET
                    </button>
                </div>

                <div className="cards bg-[#1C1816] h-auto sm:h-[470px] w-[90%] sm:w-[300px] rounded-lg text-wrap p-4">
                    <div className="text-center space-x-3 mb-4">
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                    </div>

                    <div>
                        <a href="">
                            <img src={bg2} alt="" className='h-auto w-full rounded' />
                        </a>
                    </div>
                    <div className='text-white mt-4'>
                        <h1 className='text-xl font-bold'>Zinger Got Wings</h1>
                        <h3 className='font-medium mt-2'>2 Zinger Burger + 2 Regular Drinks + <br /> Wings Bckets (6pcs)</h3>
                        <h2 className='text-lg font-bold mt-1'>Rs 1150</h2>
                    </div>

                    <button className='bg-[#EA002A] font-bold text-white rounded-lg px-4 py-2 mt-6 block mx-auto hover:bg-white hover:text-[#EA002A]'>
                        + ADD TO BUCKET
                    </button>
                </div>

                
                <div className="cards bg-[#1C1816] h-auto sm:h-[470px] w-[90%] sm:w-[300px] rounded-lg text-wrap p-4">
                    <div className="text-center space-x-3 mb-4">
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                    </div>

                    <div>
                        <a href="">
                            <img src={bg3} alt="" className='h-auto w-full rounded' />
                        </a>
                    </div>
                    <div className='text-white mt-4'>
                        <h1 className='text-xl font-bold'>Crispy Duo Box</h1>
                        <h3 className='font-medium mt-2'>5 pcs Hot & Crispy Chickens + 1 Large <br /> Fries + 2 Regular Drink</h3>
                        <h2 className='text-lg font-bold mt-1'>Rs 1350</h2>
                    </div>

                    <button className='bg-[#EA002A] font-bold text-white rounded-lg px-4 py-2 mt-6 block mx-auto hover:bg-white hover:text-[#EA002A]'>
                        + ADD TO BUCKET
                    </button>
                </div>

                
                <div className="cards bg-[#1C1816] h-auto sm:h-[470px] w-[90%] sm:w-[300px] rounded-lg text-wrap p-4">
                    <div className="text-center space-x-3 mb-4">
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                        <span className="box bg-[#EA002A] text-[#EA002A]">11</span>
                    </div>

                    <div>
                        <a href="">
                            <img src={bg4} alt="" className='h-auto w-full rounded' />
                        </a>
                    </div>
                    <div className='text-white mt-4'>
                        <h1 className='text-xl font-bold'>Family Festival 3</h1>
                        <h3 className='font-medium mt-2'>4 Zinger Burger + 4 Pieces Hot & Crispy <br />Chicken + 1.5 liter Drink</h3>
                        <h2 className='text-lg font-bold mt-1'>Rs 950</h2>
                    </div>

                    <button className='bg-[#EA002A] font-bold text-white rounded-lg px-4 py-2 mt-6 block mx-auto hover:bg-white hover:text-[#EA002A]'>
                        + ADD TO BUCKET
                    </button>
                </div>
            </div>
        </div>
    );
}
