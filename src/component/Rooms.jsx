import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // For meta tags
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room5.jpg';
import room3 from '../assets/room3.avif';

const Rooms = () => {
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
        <meta name="description" content="Explore the cozy rooms at Chopta Inn, nestled in nature's paradise. Enjoy a peaceful retreat with modern amenities." />
        <meta name="keywords" content="Chopta Inn, nature retreat, cozy rooms, mountain suites, peaceful retreat, nature's chill zone" />
        <meta name="author" content="Chopta Inn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row lg:space-x-8 p-6 lg:p-8 justify-center mt-7">
        {/* Left content section */}
        <article className="lg:w-1/2 space-y-6 lg:space-y-8 lg:mr-20 lg:ml-10" data-aos="fade-up">
          <header>
            <h1 className="text-3xl font-semibold text-yellow-700">Rooms</h1>
            <h2 className="text-5xl font-bold text-[#243048]">Chill Out in Nature's Chill Zone</h2>
          </header>
          <p className="text-sm">
            Escape into the serene beauty of nature with our cozy rooms designed for comfort and tranquility. Our rooms offer the perfect blend of modern luxury and natural charm, creating a peaceful retreat for all our guests.
          </p>
          <a href="/room" className="inline-block px-6 py-3 bg-green-900 text-white font-semibold transition-transform transform hover:scale-105">
            View All Rooms
          </a>
        </article>

        {/* Right section with room images */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 lg:mt-0">
          {/* Room 1 */}
          <RoomCard 
            image={room1} 
            alt="Sunrise Cozy Haven Suite"
            title="Sunrise Cozy Haven Suite"
            data-aos="fade-right"
          />
          {/* Room 2 */}
          <RoomCard 
            image={room2} 
            alt="Forest Whisper Cozy Cabin"
            title="Forest Whisper Cozy Cabin"
            data-aos="fade-up"
          />
          {/* Room 3 */}
          <RoomCard 
            image={room3} 
            alt="Wildflower Meadows Suite"
            title="Wildflower Meadows Suite"
            data-aos="fade-left"
          />
        </div>
      </section>
    </>
  );
};

const RoomCard = ({ image, alt, title, link, 'data-aos': dataAos }) => {
  return (
    <div className="relative flex-1 mb-4 lg:mb-0 group" data-aos={dataAos}>
      <img src={image} alt={alt} className="w-full h-[60vh] object-cover"/>
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-green-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <a href={link} className="text-yellow-500 hover:underline">View Insight</a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
