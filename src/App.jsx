import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideRoutes from './components/SideRoutes';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className="pt-16"> 
        <SideRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
