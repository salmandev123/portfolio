import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Login from './component/Login';

export default function App() {
  return (

    <>
     <Nav/>
     <div id='home'>
     <Home/>
     </div>
     <div id='about'>
     <About/>
     </div>
    
     <div id='services'>
     <Services/>
     </div>
     <div id='contact'>
     <Contact/>
     </div>
     <Login/>
    
     <Footer/>

    </>
   
    
  );
}
