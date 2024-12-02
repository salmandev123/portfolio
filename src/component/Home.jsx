import React from 'react';
import bgVideo from '../images/video.mp4'; 

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden z-50">
      <video
      src={bgVideo}
        autoPlay
        loop
        playsInline
        muted 
        className="absolute w-full h-full object-cover"
      >
        {/* <source src={bgVideo} type="video/mp4" /> */}
      </video>
      <div className='relative container mx-auto px-4  text-center text-white'>
      <h1 className='text-7xl'>Grow You'r Future <br /><span className='text-5xl'>With I.T Experts</span> </h1>
      
      </div>
      
    </div>
  );
}
