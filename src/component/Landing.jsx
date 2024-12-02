import React, { useState, useEffect } from 'react';
import laning1 from '../Images/Landing.png';
import laning2 from '../Images/landing2.png';
import landing3 from '../Images/landing3.png';

const images = [laning1, laning2, landing3];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover sm:h-[400px] md:h-[500px]"
          />
        ))}
      </div>
    </div>
  );
}
