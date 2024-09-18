import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

import chopta from '../assets/choptabanner.jpg';
import bonefire1 from '../assets/bonfire.jpg';
import bonefire2 from '../assets/bonfire3.webp';
import trekking1 from '../assets/trekking.jpg';
import trekking2 from '../assets/trekking2.jpg';
import { Link } from 'react-router-dom';

const ActivitesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <div className="w-full">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Facilities & Activities at Chopta | Adventure Awaits</title>
        <link rel="canonical" href="https://www.choptainn.com/activity" />
        <meta name="description" content="Explore exciting activities and facilities at Chopta. From bonfires to trekking, discover adventure and relaxation in the heart of nature." />
        <meta name="keywords" content="Chopta activities, bonfire, trekking, accommodation, adventure, Chopta tourism" />
        <meta name="author" content="Chopta Inn" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Facilities & Activities at Chopta | Adventure Awaits" />
        <meta property="og:description" content="Explore exciting activities and facilities at Chopta. From bonfires to trekking, discover adventure and relaxation in the heart of nature." />
        <meta property="og:image" content={chopta} />
        <meta property="og:url" content="https://www.example.com/activities" /> {/* Replace with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chopta Inn" />
        <link rel="canonical" href="https://www.example.com/activities" /> {/* Replace with your actual URL */}
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full">
        <img src={chopta} alt="Chopta Banner" className="w-full h-[400px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold uppercase text-center" data-aos="fade-in">Facilities & Activities</h1>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-yellow-600" data-aos="fade-up">Adventure Awaits Beyond Your Doorstep</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Experience the thrill and serenity of Chopta with a range of exciting activities and top-notch facilities. Whether you're looking to relax by a cozy bonfire or embark on a thrilling trek, we've got something for everyone. Dive into nature and make unforgettable memories with us!
        </p>
      </section>

      {/* Bonfire Activity Section */}
      <section className="py-12 px-4 bg-white lg:mx-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Images */}
          <div className="flex-shrink-0 w-full md:w-1/2 grid grid-cols-2 gap-4 mb-8 md:mb-0" data-aos="fade-right">
            <img src={bonefire1} alt="Bonfire Activity 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={bonefire2} alt="Bonfire Activity 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="md:ml-12 w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-yellow-600">Bonfire Nights</h2>
            <h3 className="text-2xl font-semibold text-[#243048] mt-2">Embrace the Warmth of a Cozy Fire</h3>
            <p className="text-lg text-gray-500 mt-4">
              Unwind under the stars around a crackling bonfire. Perfect for relaxing evenings with friends and family, our bonfire experiences are designed to offer warmth and connection. Enjoy marshmallow roasting, storytelling, and the serene ambiance of nature.
            </p>
            <button className="mt-6 px-10 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
              <Link to='/contact'>Book Your Bonfire</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Trekking Activity Section */}
      <section className="py-12 px-4 bg-gray-100 lg:mx-20">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Images */}
          <div className="flex-shrink-0 w-full md:w-1/2 grid grid-cols-2 gap-4 mb-8 md:mb-0" data-aos="fade-left">
            <img src={trekking1} alt="Trekking Activity 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={trekking2} alt="Trekking Activity 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="md:mr-12 w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-yellow-600">Trekking Adventures</h2>
            <h3 className="text-2xl font-semibold text-[#243048] mt-2">Conquer the Trails with Stunning Views</h3>
            <p className="text-lg text-gray-500 mt-4">
              Experience the thrill of trekking through breathtaking landscapes. Our guided treks offer a chance to explore scenic trails, encounter diverse wildlife, and achieve personal milestones. Whether you're a seasoned trekker or a beginner, our trails are ready for adventure.
            </p>
            <button className="mt-6 px-10 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
            <Link to='/contact'>Start Your Trek</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitesPage;
