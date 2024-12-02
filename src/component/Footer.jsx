import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faTwitterSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div  className='w-full h-96 bg-gray-400  '>
      
      <div className="home ml-20 text-xl flex justify-around ">
        <div className="mt-12">
          <label className='text-xl font-bold'>Our Services</label>
          <ul>
            <li>Web Devolopement</li>
            <li>MAchine Learning</li>
            <li>Cyber Security</li>
            <li>Graphics Designerf</li>
          </ul>
        </div>
        <div className='mt-12'>
          <label  className="text-xl font-bold">Company</label>
          <ul>
            <li>About US</li>
            <li>Contact Us</li>
            <li>Support</li>
           <li>Success</li>
          </ul>
        </div>
        <div className="mt-12">
          <label  className="text-xl font-bold">Terms & policies</label>
          <ul>
            <li>Polices</li>
            <li>Terms of Use</li>
            <li>Code of condact</li>
            <li>Privacy</li>
          </ul>
        </div>

       
       




      </div>
      <div className="icons ml-20 py-7 space-x-5 text-2xl text-right mr-24 mt-24 ">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTelegram} />
        <FontAwesomeIcon icon={faTwitterSquare} />
      </div >


    </div>
  )
}
