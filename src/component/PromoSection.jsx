import React from 'react';
import { Helmet } from 'react-helmet';
import bgImage from '../assets/nature.jpeg'; // Replace with your actual image path

const PromoSection = () => {
  return (
    <>
      <Helmet>
       
        <meta name="description" content="Enjoy a budget-friendly getaway with 30% off your stay at Chopta. Book now for a memorable experience surrounded by nature!" />
        <meta name="keywords" content="hotel offers, Chopta, save 30%, budget-friendly, travel deals" />
        <meta name="author" content="Travel To Nirvana" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Exclusive Offers | Save 30% at Chopta" />
        <meta property="og:description" content="Book your stay at Chopta and save 30%! Enjoy a nature-filled escape with our budget-friendly offer." />
        <meta property="og:image" content={bgImage} />
        <meta property="og:url" content="https://traveltonirvana.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section 
        className="relative bg-cover bg-center p-8 rounded-lg shadow-lg mt-2"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-labelledby="promo-heading"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 rounded-lg text-center" role="contentinfo">
          <div className="mb-6">
            {/* Subheading */}
            <h6 id="promo-heading" className="text-lg font-semibold text-yellow-500 mb-2">Budget-Friendly Bliss</h6>

            {/* Main Heading */}
            <h1 className="lg:text-5xl text-3xl font-bold text-white mb-4">Save 30% on Your Stay at Chopta!</h1>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-6">
              Enjoy a serene escape in Chopta with our exclusive offer. Save 30% on your stay and experience the beauty of nature like never before. Book your budget-friendly getaway now!
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-block bg-green-900 text-white text-sm font-medium px-6 py-3 hover:bg-yellow-700 transition duration-300"
              role="button"
              aria-label="Book Now"
            >
              Book Now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoSection;
