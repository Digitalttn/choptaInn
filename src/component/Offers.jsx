import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';

const Offers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Discover our best hotel offers including discounts on premium rooms, family packages, and weekend getaway deals." />
        <meta name="keywords" content="hotel offers, exclusive hotel deals, premium room discounts, family packages, weekend getaway, luxury accommodations" />
        <meta name="author" content="Travel To Nirvana" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Exclusive Hotel Offers | Travel To Nirvana" />
        <meta property="og:description" content="Explore our best hotel offers including premium room discounts, family packages with free breakfast, and weekend getaways with luxury amenities." />
        <meta property="og:image" content={offer1} />
        <meta property="og:url" content="https://traveltonirvana.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="offers-heading">
        <header className="text-center mb-12">
          <h1 id="offers-heading" className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-down">
            Our Best <span className="text-yellow-700">Hotel Offers</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="100">
            <article className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={offer1}
                alt="Exclusive Hotel Offer 1"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 1</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200">
            <article className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={offer2}
                alt="Special Hotel Offer 2"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 2</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="300">
            <article className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={offer3}
                alt="Weekend Getaway Offer 3"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 3</p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Offers;
