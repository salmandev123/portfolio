import React from 'react'
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'

export default function About() {
  return (
    <div className='flex justify-around mt-20 text-center'>
        <div className="cards  bg-white shadow-xl h-96 ">
          <img src={img1} alt="image" width={400} height={500} className='rounded-t-xl shadow-gray-900'/>
          <h2 className='text-2xl mt-3'>Come first & <br /> <span>Grow first</span></h2>
          <button className='rounded-full text-white bg-green-600 text-xl'>Good Luck</button>



        </div>
        <div className="cards shadow-xl bg-white">
          <img src={img2} alt="image" width={400} height={500} className='rounded-t-xl shadow-gray-900'/>
          <h2 className='text-2xl mt-3'>Don't Waste Your Time <br /> <span>ON Scrolling</span></h2>
          <button className='rounded-full text-white bg-green-600 text-xl'>Good Luck</button>


        </div>
        <div className="cards shadow-xl  bg-white ">
          <img src={img3} alt="image" width={400} height={500} className='rounded-t-xl shadow-gray-900'/>
          <h2 className='text-2xl mt-3'>Make Your Today Is <br /> <span>Better Then Yesterday  </span></h2>
          <button className='rounded-full text-white bg-green-600 text-xl'>Good Luck</button>


        </div>
    </div>
  )
}
