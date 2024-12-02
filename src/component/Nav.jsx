
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center bg-white py-3">
      <h1 className="text-3xl ml-10 font-serif">
        Portfolio <FontAwesomeIcon icon={faAirbnb} />
      </h1>
      <ul className="flex gap-10 text-lg">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <li>About</li>
        </Link>
        <Link to="services" smooth={true} duration={500} className="cursor-pointer">
          <li>Services</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
          <li>Contact</li>
        </Link>
      </ul>
      <input
        type="text"
        placeholder="Search here"
        className="mr-20 bg-gray-200 py-2 px-5 rounded-md"
      />
    </nav>
  );
}
