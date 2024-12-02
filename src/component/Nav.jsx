import React from 'react'
import kfc from '../Images/download.png'
import Delivery from '../Images/Delivery.png'
import img3 from '../Images/3.png'
import Landing from './Landing'
import Home from './Home'
import About from './About'
import Topdeals from './Topdeals'
import Images from './Images'
import Footer from './Footer'



export default function Nav() {
    return (
        <>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-black py-4 sm:py-8 fixed top-0 left-0 w-full z-50">
                <div className="flex items-center sm:ml-10 lg:ml-44 gap-2 sm:gap-4">
                    <img src={kfc} alt="kfc" className="h-8 w-8 sm:h-auto sm:w-auto" />
                    <button className="delivery flex items-center gap-2 p-2 sm:p-3">
                        <img src={Delivery} alt="Delivery" className="h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="text-white text-sm sm:text-base">DELIVERY</span>
                    </button>
                    <button className="pickup flex items-center gap-2 p-2 sm:p-3">
                        <img src={img3} alt="Pickup" className="h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="text-white text-sm sm:text-base">PICKUP</span>
                    </button>
                </div>
                <div className="mt-4 sm:mt-0">
                    <a href="#">
                        <button className="bg-[#EA002A] rounded-md p-2 sm:p-1.5 text-white text-sm sm:text-base sm:mr-10 lg:mr-44">
                            LOGIN
                        </button>
                    </a>
                </div>
            </div>


            <div>
                <Landing />
                <Home />
                <About />
                <Topdeals />
                <Images />
                <Footer />

            </div>
        </>
    )
}