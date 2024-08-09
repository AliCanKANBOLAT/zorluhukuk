import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import flag from '../assets/flag.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
import zorluhukuk from "../../public/zorlulogo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const getNavLinkClass = ({ isActive }) =>
    `block py-2 px-4 rounded-lg transition duration-300 ${
      isActive ? 'bg-indigo-900 text-white' : 'hover:bg-cyan-700 hover:text-white'
    }`;

  return (
    <>
      <nav className="bg-indigo-950 text-white shadow-lg relative z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex shadow-xl bg-slate-400 rounded-xl items-center lg:space-x-6">
            <NavLink to="/" className="w-32 h-24 rounded-xl mb-3">
              <img src={zorluhukuk} alt="" />
            </NavLink>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Bayrak ve Menü Öğeleri */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavLink to="/" className={getNavLinkClass} onClick={handleMenuItemClick}>ANA SAYFA</NavLink>
            <NavLink to="/hakkimizda" className={getNavLinkClass} onClick={handleMenuItemClick}>HAKKIMIZDA</NavLink>
            <NavLink to="/faaliyetalanlari" className={getNavLinkClass} onClick={handleMenuItemClick}>FAALİYET ALANLARIMIZ</NavLink>
            <NavLink to="/blog" className={getNavLinkClass} onClick={handleMenuItemClick}>BLOG</NavLink>
            <NavLink to="/bulten" className={getNavLinkClass} onClick={handleMenuItemClick}>BÜLTEN</NavLink>
            <NavLink to="/iletisim" className={getNavLinkClass} onClick={handleMenuItemClick}>İLETİŞİM</NavLink>
            </div>
            
            {/* Türk Bayrağı */}
            <img src={flag} alt="Turkish Flag" className="w-16 h-16 border rounded-full shadow-xl shadow-red-900 hover:bg-red-600 transition-colors duration-300 " />
          
        </div>

        {/* Mobil Menü Öğeleri */}
        <div 
          className={`fixed inset-0 bg-cyan-800 text-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-between p-8 lg:hidden`}
        >
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-3xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center justify-center space-y-6 mt-16 ">
            <NavLink to="/" className={getNavLinkClass} onClick={handleMenuItemClick}>ANA SAYFA</NavLink>
            <NavLink to="/hakkimizda" className={getNavLinkClass} onClick={handleMenuItemClick}>HAKKIMIZDA</NavLink>
            <NavLink to="/ekibimiz" className={getNavLinkClass} onClick={handleMenuItemClick}>EKİBİMİZ</NavLink>
            <NavLink to="/faaliyetalanlari" className={getNavLinkClass} onClick={handleMenuItemClick}>HİZMETLERİMİZ</NavLink>
            <NavLink to="/blog" className={getNavLinkClass} onClick={handleMenuItemClick}>BLOG</NavLink>
            <NavLink to="/bulten" className={getNavLinkClass} onClick={handleMenuItemClick}>BÜLTEN</NavLink>
            <NavLink to="/kariyer" className={getNavLinkClass} onClick={handleMenuItemClick}>KARİYER</NavLink>
            <NavLink to="/iletisim" className={getNavLinkClass} onClick={handleMenuItemClick}>İLETİŞİM</NavLink>
          </div>

          {/* Mobilde Türk Bayrağı */}
          <img src={flag} alt="Turkish Flag" className="w-16 h-16 mt-4" />
          
          {/* Telefon Numarası - Sadece Mobilde */}
          <a href="tel:+905057462404" className="text-lg mt-4">
            +90 (505) 746 24 04
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
