import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // For meta tags
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import chopta from '../assets/tungnath.jpeg';
import { BiRestaurant } from "react-icons/bi";
import { GiBirchTrees, GiPikeman } from "react-icons/gi";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <meta name="description" content="Located in Makku Math village, experience nature's beauty and spiritual serenity with the winter worship of Lord Tungnath." />
        <meta name="keywords" content="Makku Math, Tungnath, Lord Tungnath, winter worship, Chopta Inn, nature retreat" />
        <meta name="author" content="Chopta Inn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row bg-white min-h-[70vh]">
        
        {/* Left section with image */}
        <div className="lg:w-1/3 h-48 lg:h-auto relative lg:ml-20 flex justify-center items-center lg:mt-20" data-aos="fade-right">
          <img
            src={chopta}
            alt="Scenic view of Chopta"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle section with content */}
        <article className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center items-center lg:items-start" data-aos="fade-up">
          <header>
            <p className="text-yellow-600 text-xl lg:text-2xl mb-3 text-center lg:text-left">ABOUT US</p>
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#243048] mb-3 text-center lg:text-left">
              Crafting Memorable Nature Escapes
            </h1>
          </header>
          <p className="text-gray-600 mb-2 text-center lg:text-left">
            Located in the serene village of Makku Math, Chopta Inn offers a peaceful retreat, nestled in nature and on the route to the sacred Tungnath Temple.
          </p>
          <p className="text-gray-500 text-center lg:text-left">
            During the winter months, when the doors of Tungnath Temple close, the deity of Lord Tungnath is worshipped here at Makku Math. This makes our location not only a nature lover’s paradise but also a spiritually significant stop for pilgrims.
          </p>
        </article>

        {/* Right section with services */}
        <aside className="lg:w-1/3 bg-green-900 text-white p-6 lg:p-8 flex flex-col space-y-6 items-center lg:items-start lg:mr-20" data-aos="fade-left">
          <ServiceItem 
            icon={<BiRestaurant className="w-8 h-8 text-yellow-500 hover:text-yellow-400 transition" />}
            title="Restaurant"
            description="Enjoy delicious local cuisine in our cozy restaurant."
          />
          <ServiceItem 
            icon={<GiBirchTrees className="w-8 h-8 text-yellow-500 hover:text-yellow-400 transition" />}
            title="Nature"
            description="Explore the beauty of Chopta's forests and surroundings."
          />
          <ServiceItem 
            icon={<GiPikeman className="w-8 h-8 text-yellow-500 hover:text-yellow-400 transition" />}
            title="Guider"
            description="Get guided tours to discover hidden gems of the region."
          />
        </aside>
      </section>
    </>
  );
};

// Service item component for reuse
function ServiceItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3 hover:bg-green-800 p-3 rounded-lg transition-all duration-300" data-aos="zoom-in">
      <div>{icon}</div>
      <div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-green-100 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default AboutUs;
