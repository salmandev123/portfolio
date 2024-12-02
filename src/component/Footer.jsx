import React from 'react'
import kfc from '../Images/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebook, faGooglePay, faGooglePlay, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='bg-[#1C1816] h-auto w-full'>
      <div className='flex flex-col lg:flex-row pt-20 items-center justify-between px-4'>
        <img src={kfc} alt="KFC Logo" className='lg:ml-[600px] w-32 md:w-48 mb-4 lg:mb-0' />

        <div className='flex justify-center space-x-4 mb-6 lg:mb-0'>
          <FontAwesomeIcon icon={faYoutube} className='bg-white rounded-full text-[red] w-9 h-9' />
          <FontAwesomeIcon icon={faFacebook} className='bg-[blue] text-2xl rounded-full text-[white] w-9 h-9' />
          <FontAwesomeIcon icon={faInstagram} className='bg-white rounded-full text-[black] w-9 h-9' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row text-white justify-around mt-28 text-xl'>
        <ul className='mb-6 lg:mb-0'>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">About us</li></a>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Mitao Bhookh</li></a>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Privacy policy</li></a>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Careers</li></a>
          <h2 className='mt-20'>2024 KFC. All rights reserved</h2>
        </ul>

        <ul className='mb-6 lg:mb-0'>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Contact us</li></a>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Store Locator</li></a>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Track Order</li></a>
        </ul>

        <ul className='mb-6 lg:mb-0'>
          <a href=""><li className="hover:text-[#EA002A] hover:delay-2000">Terms & Conditions</li></a>
        </ul>

        <div className='space-x-2 mb-6 lg:mb-0'>
          <button className='bg-black border-white rounded-md py-2 px-4 text-xl'>
            <FontAwesomeIcon icon={faApple} /> App Store
          </button>
          <button className='bg-black border-white rounded-md py-2 px-4 text-xl'>
            <FontAwesomeIcon icon={faGooglePlay} className='text-blue-800' /> Google Play
          </button>
          <h2 className='mt-28 ml-10 text-[#EA002A] font-bold'>Powered by</h2>
          <h3 className='underline-offset-4'>Simplest Technology Solution</h3>
        </div>
      </div>
    </div>
  )
}
