import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons'
export default function Services() {
  return (
    
    <div id='services' className='flex justify-around text-center mt-52  '>
        <div className="cards h-70 w-60 bg-white shadow-xl rounded-md p-8">
            
            <FontAwesomeIcon icon={faAmazonPay} className='mb-10'/>
            <h1 className='text-3xl'>web development</h1>
            <label className='text-xl'>Duration</label>
            <p className='text-xl'>3 month</p>
            <button className='bg-blue-400 rounded-md py-1 px-10'><a href="">Apply</a> </button>
        </div>
        <div className="cards h-70 w-60 bg-white rounded-lg shadow-lg p-8">
            
            <FontAwesomeIcon icon={faAmazonPay} className='mb-10'/>
            <h1 className='text-3xl'>Artificial Inteligense</h1>
            <label className='text-xl'>Duration</label>
            <p className='text-xl'>3 month</p>
            <button className='bg-blue-400 rounded-md py-1 px-10'><a href="">Apply</a></button>
        </div>
        <div className="cards h-70 w-60 bg-white rounded-lg shadow-lg p-8">
            
            <FontAwesomeIcon icon={faAmazonPay} className='mb-10'/>
            <h1 className='text-3xl'>Cyber security</h1>
            <label className='text-xl'>Duration</label>
            <p className='text-xl'>3 month</p>
            <button className='bg-blue-400 rounded-md py-1 px-10'><a href="">Apply</a></button>
        </div>
        <div className="cards h-70 w-60 bg-white rounded-lg shadow-lg p-8">
            
            <FontAwesomeIcon icon={faAmazonPay} className='mb-10'/>
            <h1 className='text-3xl'>Graphic designer</h1>
            <label className='text-xl'>Duration</label>
            <p className='text-xl'>3 month</p>
            <button className='bg-blue-400 rounded-md py-1 px-10'><a href="">Apply</a></button>
        </div>
        
    </div>
  )
}
