import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing head tags
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import trekking from '../assets/trekking.jpg';
import Nature from '../assets/nature.jpeg';
import { SiThunderbird } from "react-icons/si";
import { GiBurningForest } from "react-icons/gi";
import { PiFarmFill } from "react-icons/pi";
import { SiSnapcraft } from "react-icons/si";

const features = [
  {
    imgSrc: <GiBurningForest className="text-4xl text-green-600 mx-auto" />, // Added styling for size and color
    title: "Nature Walks",
    description: "Explore scenic trails and reconnect with nature in serene surroundings.",
  },
  {
    imgSrc: <PiFarmFill className="text-4xl text-yellow-600 mx-auto" />, // Added styling for size and color
    title: "Traditional Farming",
    description: "Experience local farming techniques and get hands-on in the fields.",
  },
  {
    imgSrc: <SiThunderbird className="text-4xl text-blue-600 mx-auto" />, // Added styling for size and color
    title: "Bird Watching",
    description: "Discover various species of birds and enjoy peaceful observation.",
  },
  {
    imgSrc: <SiSnapcraft className="text-4xl text-red-600 mx-auto" />, // Added styling for size and color
    title: "Local Crafts",
    description: "Learn about local craftsmanship and participate in making traditional crafts.",
  },
];

const Activities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Enjoy village life activities such as nature walks, traditional farming, bird watching, and local crafts in a peaceful environment." />
        <meta name="keywords" content="village activities, nature walks, bird watching, local crafts, traditional farming, rural adventures" />
        <meta name="author" content="Travel To Nirvana" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Village Activities - Rural Adventures & Nature" />
        <meta property="og:description" content="Explore a variety of village activities including nature walks, traditional farming, bird watching, and local crafts." />
        <meta property="og:image" content="https://askit.dextheme.net/natura/wp-content/uploads/sites/4/2024/01/XX68QMY.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Village Activities",
              "description": "Enjoy a variety of village life activities including nature walks, traditional farming, bird watching, and local crafts.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chopta, Tuganth Temple",
                "addressCountry": "India"
              },
              "image": "https://askit.dextheme.net/natura/wp-content/uploads/sites/4/2024/01/XX68QMY.jpg"
            }
          `}
        </script>
      </Helmet>

      <main className="py-12 lg:flex lg:justify-between bg-gray-200 lg:space-x-8">
        {/* Section with count and images */}
        <section className="lg:w-1/2 flex flex-wrap justify-center lg:justify-end items-center lg:mb-0">
          {/* First image with greater height */}
          <div
            className="w-full md:w-1/2 lg:w-5/12 flex justify-center mb-6 lg:mb-0 lg:mr-4"
            data-aos="fade-right"
          >
            <img
              src={Nature}
              alt="Village Nature"
              className="w-full lg:h-[450px] object-cover rounded-lg shadow-lg" // Set explicit height
            />
          </div>

          {/* Second image with smaller height */}
          <div
            className="w-full md:w-1/2 lg:w-5/12 flex justify-center"
            data-aos="fade-left"
          >
            <img
              src={trekking}
              alt="Village Activities"
              className="w-full lg:h-[300px] object-cover rounded-lg shadow-lg" // Set explicit height
            />
          </div>
        </section>

        {/* Facilities & Activities Section */}
        <section className="lg:w-1/2 text-center px-4 lg:px-0">
          <h6 className="text-lg font-semibold text-yellow-600" data-aos="fade-down">FACILITIES & ACTIVITIES</h6>
          <h2 className="text-4xl font-bold mt-2 text-gray-900" data-aos="fade-up">
            Village Life Awaits Beyond <br />Your Doorstep
          </h2>
          <p className="mt-4 text-gray-600" data-aos="fade-up" data-aos-delay="200">
            Discover a range of peaceful and engaging activities that offer a glimpse into rural life.<br /> From traditional crafts to exploring the natural beauty around you.
          </p>

          {/* Center the grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 justify-center max-w-5xl mt-8 mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Staggered delay
              >
                <div className="mb-4">
                  {feature.imgSrc}
                </div>
                <h4 className="text-xl text-center font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Activities;
