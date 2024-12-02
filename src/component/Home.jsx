import React from 'react';
import bg1 from '../Images/bg10.png';
import bg2 from '../Images/mg1.png';
import bg3 from '../Images/mg2.png';
import bg4 from '../Images/mg4.png';
import bg5 from '../Images/mg5.png';

export default function Home() {
  return (
    <>
      <div className="ml-auto bg-black w-full h-auto min-h-[600px] p-4">
        <div className="text-center">
          <button className="bg-[#EA002A] px-8 sm:px-72 py-1.5 text-white mt-8 rounded-md">
            REORDER
          </button>
          <h1 className="text-xl sm:text-3xl text-white font-sans font-extrabold mt-8 sm:mt-20">
            EXPLORE MENU
          </h1>
        </div>

        <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12 sm:mt-28 justify-center">
        
          {[bg1, bg2, bg3, bg4, bg5].map((image, index) => (
            <div
              key={index}
              className="bg-[#1C1816] h-64 w-full sm:w-52 rounded-tr-full rounded-tl-full rounded-bl-full text-center transition-transform duration-300 hover:scale-105"
            >
              <a href="img">
                <img src={image} alt="" className="h-44 mx-auto" />
              </a>
              <h2 className="text-lg text-white font-semibold relative inline-block mt-2">
                {["Everyday Value", "Ala-cart-&-Combose", "Promotion", "Signature-Boxes", "Sharing"][index]}
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-12 rounded-md h-1 bg-[#EA002A] mt-1"></span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
