import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import cottage from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Only animate once
    });
  }, []);

  return (
    <>
      {/* Meta tags for SEO */}
      <Helmet>
        <title>Chopta Inn - </title>
        <meta name="description" content="Enjoy a serene stay at Chopta Inn with cozy cottage, beautiful surroundings, and fun activities. Book now to explore nature!" />
        <meta name="keywords" content="Chopta, cottage, nature, getaway, retreat, activities, booking, stay" />
        <meta name="author" content="Chopta Inn" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <header className="bg-green-900 fixed top-0 left-0 w-full flex items-center justify-between p-4 h-24 z-50">
        {/* Logo Section with AOS animation */}
        <div className="pl-8 flex items-center flex-grow" data-aos="fade-down">
          <img src={cottage} alt="Chopta Inn Logo" className="w-[200px] h-auto object-contain" />
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="lg:hidden pr-4" data-aos="fade-left">
          <button onClick={toggleDrawer} className="text-white text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Section - Visible on Larger Screens */}
        <nav className="hidden lg:flex justify-center flex-grow" data-aos="fade-down">
          <ul className="flex space-x-8 text-white">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/room" className="hover:text-yellow-500">Cottage Room</Link></li>
            <li><Link to="/explore" className="hover:text-yellow-500">Explore</Link></li>
            <li><Link to="/activity" className="hover:text-yellow-500">Activities</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Book Now Button - Visible on Larger Screens */}
        <div className="hidden lg:flex text-right pr-10 flex-grow justify-end" data-aos="fade-up">
          <button className="bg-yellow-600 text-white px-10 py-3 hover:bg-yellow-700">
            <Link to='/contact'>Book Now</Link>
          </button>
        </div>

        {/* Drawer for Small Screens */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-green-900 bg-opacity-95 z-50 flex flex-col items-start pl-8 pt-8 space-y-8" data-aos="fade-right">
            <button onClick={closeDrawer} className="text-white text-3xl self-end">
              <FiX />
            </button>
            <ul className="text-white text-xl space-y-4">
              <li><Link to="/" className="hover:text-yellow-500" onClick={closeDrawer}>Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500" onClick={closeDrawer}>About Us</Link></li>
              <li><Link to="/room" className="hover:text-yellow-500" onClick={closeDrawer}>Cottage Room</Link></li>
              <li><Link to="/explore" className="hover:text-yellow-500" onClick={closeDrawer}>Explore</Link></li>
              <li><Link to="/activity" className="hover:text-yellow-500" onClick={closeDrawer}>Activities</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500" onClick={closeDrawer}>Contact Us</Link></li>
            </ul>
            <button className="bg-yellow-600 text-white px-8 py-3 hover:bg-yellow-700">
              <Link to="/contact">Book Now</Link>
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
