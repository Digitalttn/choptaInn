import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // Import AOS styles
import { Helmet } from 'react-helmet';
import AOS from 'aos'; // Import AOS
import hotelBanner from '../assets/chopta.jpeg';
import roomImage1 from '../assets/cottage.jpeg';
import hotel1 from '../assets/Aashiyana.png';
import hotel2 from '../assets/BEHLAshram.png';
import hotel3 from '../assets/BadriVilleResort.png';
import hotel4 from '../assets/HotelDivine.png';
import hotel5 from '../assets/Neelkanth.png';
import hotel6 from '../assets/Dhanesh.png';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Chopta Inn</title>
        <link rel="canonical" href="https://www.choptainn.com/about" />
        <meta name="description" content="Chopta Inn, part of Travel to Nirvana, offers a serene retreat with luxurious accommodations in the Himalayas. Discover our story, vision, and why you should choose us for your stay." />
        <meta name="keywords" content="Chopta Inn, Travel to Nirvana, Himalayan retreat, luxury accommodations, adventure, relaxation" />
        <meta name="author" content="Travel to Nirvana" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Chopta Inn | Travel to Nirvana" />
        <meta property="og:description" content="Chopta Inn, part of Travel to Nirvana, offers a serene retreat with luxurious accommodations in the Himalayas. Discover our story, vision, and why you should choose us for your stay." />
        <meta property="og:image" content={hotelBanner} />
        <meta property="og:url" content="https://www.example.com/about-us" /> {/* Replace with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chopta Inn" />
        <link rel="canonical" href="https://www.example.com/about-us" /> {/* Replace with your actual URL */}
      </Helmet>
      
      <header data-aos="fade-down">
        <div className="relative w-full">
          <img src={hotelBanner} alt="Hotel Banner showcasing the beautiful landscape of Chopta Inn" className="w-full h-[400px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold uppercase text-center">About Chopta Inn</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* About Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-yellow-600">Welcome to Chopta Inn</h2>
              <p className="text-lg text-gray-600 mt-4">
                Situated on the scenic route to Tungnath, Chopta Inn Cottage offers a tranquil escape amidst the beauty of the Himalayas. Whether you're seeking adventure or a peaceful retreat, our cozy and luxurious accommodations provide the perfect blend of nature and comfort.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Our well-furnished rooms, breathtaking views, and personalized services ensure that you experience both relaxation and excitement during your stay. Whether you're trekking to Tungnath or enjoying the serenity of Chopta, we offer a warm, welcoming stay that feels like home.
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
               <Link to='/contact'>Book Your Stay </Link>
              </button>
            </div>

            {/* About Images */}
            <div className="md:w-1/2 gap-4" data-aos="fade-left">
              <img src={roomImage1} alt="Cozy room at Chopta Inn" className="lg:w-[60vw] lg:h-[50vh] object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-green-900" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-yellow-600">Our Story</h2>
            <p className="text-lg text-white mt-4">
              Chopta Inn Cottage was created to give travelers a unique experience of the Himalayan beauty. Nestled in nature, we started with the goal of blending modern comfort with the rustic charm of the Himalayas, creating a serene haven for those who come to explore or simply unwind.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="text-center" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-yellow-600">Our Vision</h3>
              <p className="text-lg text-green-900 mt-4">
                To be the top choice for travelers seeking a unique blend of adventure and relaxation in the majestic Himalayas. We aim to provide an unforgettable experience where nature and comfort coexist in harmony.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 mt-4">
                Our mission is to provide exceptional hospitality that goes beyond expectations, offering a peaceful yet exciting environment where guests can relax, recharge, and explore the wonders of Chopta and Tungnath.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-100" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Why Choose Chopta Inn Cottage?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Unique Experience */}
              <div className="text-center" data-aos="fade-up">
                <h3 className="text-xl font-semibold text-yellow-600">Unique Experience</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Located on the way to Tungnath, we offer a perfect retreat with proximity to adventure and serene natural beauty.
                </p>
              </div>

              {/* Cozy Rooms */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-semibold text-yellow-600">Cozy & Comfortable Rooms</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Stay in well-appointed rooms designed with modern amenities and cozy interiors for a perfect mountain retreat.
                </p>
              </div>

              {/* Personalized Service */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold text-yellow-600">Personalized Service</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Our dedicated team ensures that every guest feels special, with attention to detail and personalized services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings} className="relative">
              <div className="px-4">
                <img src={hotel1} alt="Hotel Aashiyana" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="px-4">
                <img src={hotel2} alt="BEHLA Ashram" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="px-4">
                <img src={hotel3} alt="Badri Ville Resort" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="px-4">
                <img src={hotel4} alt="Hotel Divine" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="px-4">
                <img src={hotel5} alt="Neelkanth" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="px-4">
                <img src={hotel6} alt="Dhanesh" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </Slider>
          </div>
        </section>
      </main>

   
    </>
  );
};

export default AboutUsPage;
