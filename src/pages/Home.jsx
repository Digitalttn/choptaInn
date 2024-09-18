import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import cottage from '../assets/cottage.jpeg';
import AboutUs from '../component/AboutUs';
import Rooms from '../component/Rooms';
import Accomodation from '../component/Accomodation';
import Activities from '../component/Activities';
import Testimonial from '../component/Testimonial';
import Offers from '../component/Offers';
import PromoSection from '../component/PromoSection';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* Meta tags for SEO */}
      <Helmet>
        <title>Chopta Inn - Best Hotel in Chopta</title>
        <meta name="description" content="Discover the perfect getaway at Chopta Inn, located in Makku Math village on the route to Tungnath Temple. Experience nature's beauty, comfortable accommodations, and exciting activities. Book your stay now!" />
        <meta name="keywords" content="Chopta, Makku Math, Tungnath, cottage, nature, getaway, retreat, stay, accommodation, activities" />
        <meta name="author" content="Chopta Inn" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Hero Section */}
      <section className='relative'>
        {/* Background Image */}
        <img src={cottage} className='h-screen w-full object-cover' alt="Cottage" data-aos="fade-in" />

        {/* Overlay Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4' data-aos="fade-up">
          <h1 className='text-6xl sm:text-4xl md:text-6xl font-bold mb-4'>
            Experience Nature's<br /> Embrace
          </h1>
          <p className='text-base sm:text-lg md:text-xl mb-6 px-4'>
            Explore the charming Makku Math village, located on the way to the Tungnath Temple.
          </p>
          <a href="/about" className='border border-white text-white py-2 px-6 hover:bg-yellow-700 transition duration-300'>
            Read More
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" data-aos="fade-up">
        <AboutUs />
      </section>

      {/* Rooms Section */}
      <section id="rooms" data-aos="fade-up">
        <Rooms />
      </section>

      {/* Accomodation Section */}
      <section id="accomodation" data-aos="fade-up">
        <Accomodation />
      </section>

      {/* Activities Section */}
      <section id="activities" data-aos="fade-up">
        <Activities />
      </section>

      {/* Offers Section */}
      <section id="offers" data-aos="fade-up">
        <Offers />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-aos="fade-up">
        <Testimonial />
      </section>

      {/* Promo Section */}
      <section id="promo" data-aos="fade-up">
        <PromoSection />
      </section>
    </>
  );
};

export default Home;
