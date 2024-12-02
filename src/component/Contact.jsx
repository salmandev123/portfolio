import React from 'react';
// Import specific icons from react-icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default function Contact() {
  return (
    <>
    
    <div id='contact'>
      <ul className='text-xl text-center mt-32'>
        <li className='text-4xl'>Contact With US</li>
        <li className='mb-2 mt-3 font-sarif'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-green-500'/>  <a href="">03119715398  </a>    
        </li>
        <li>
         <FontAwesomeIcon icon={faInstagram} className='text-red-500'/> <a href="">Salman javed</a>
        </li>
      </ul>
    </div>
    </>
  );
}
