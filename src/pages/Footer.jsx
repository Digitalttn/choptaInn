import React from 'react';
import { Helmet } from 'react-helmet';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Chopta Inn, part of Travel to Nirvana, offers a serene retreat with exceptional experiences. Explore our contact information, quick links, and connect with us through social media." />
        <meta name="keywords" content="Chopta Inn, Travel to Nirvana, footer, contact us, social media, quick links" />
        <meta name="author" content="Travel to Nirvana" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <footer className="bg-green-900 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          {/* Footer Top: Links and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-600 mb-4">About Us</h3>
              <p className="text-sm">
                Chopta Inn, a proud member of Travel to Nirvana, offers a tranquil retreat amidst nature's splendor. Whether you're seeking relaxation or adventure, we provide an exceptional experience for all our guests.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-600 mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li className="hover:underline"><Link to='/'>Home</Link></li>
                <li className="hover:underline"><Link to='/room'>Rooms</Link></li>
                <li className="hover:underline"><Link to='/about'>About Us</Link></li>
                <li className="hover:underline"><Link to='/activity'>Facilities</Link></li>
                <li className="hover:underline"><Link to='/contact'>Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-600 mb-4">Contact Us</h3>
              <p className="text-sm mb-4">Shop 2 & 3, Second Floor, Surya Complex, Ranipur More Haridwar, Uttarakhand Pin Code – 249401</p>
              <p className="text-sm mb-2">Email: salesinfo@traveltonirvana.com</p>
              <p className="text-sm">Phone: +91 9258126088, +91 9258126089, +91 9389301916</p>
            </div>
          </div>

          {/* Footer Bottom: Social Links and Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/traveltonirvana/" className=" bg-[#281dbc] hover:text-white transition" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/p/C9buaWwBLSf/?igsh=M3YwZWdvOTRjZ2h5" className="text-gray-400 bg-[#8c1c1c] hover:text-white transition" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@Traveltonirvanaharidwar" className=" bg-[#e70909] hover:text-white transition" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 mt-4 md:mt-0">&copy; 2024 Chopta Inn, a part of Travel to Nirvana. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
