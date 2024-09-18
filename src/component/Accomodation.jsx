import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // For meta tags
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import chopta from '../assets/cottage.jpeg';
import { SiCcleaner } from "react-icons/si";

const features = [
  {
    imgSrc: "https://askit.dextheme.net/natura/wp-content/uploads/sites/4/2024/01/6h.png",
    title: "Breakfast",
    description: "Enjoy a healthy, delicious breakfast prepared fresh every morning to start your day in nature.",
    isIcon: false,
  },
  {
    imgSrc: "https://askit.dextheme.net/natura/wp-content/uploads/sites/4/2024/01/7h.png",
    title: "24h Service",
    description: "Our staff is available 24/7 to ensure that your stay is as comfortable and worry-free as possible.",
    isIcon: false,
  },
  {
    icon: <SiCcleaner />,
    title: "House Keeping",
    description: "Daily housekeeping service ensures that your room is always clean and ready for relaxation.",
    isIcon: true,
  },
  {
    imgSrc: "https://askit.dextheme.net/natura/wp-content/uploads/sites/4/2024/01/9h.png",
    title: "Security",
    description: "Your safety is our priority, with 24-hour security ensuring a peaceful and secure environment.",
    isIcon: false,
  }
];

const Accomodation = () => {
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
        {/* <title>Accommodation - Nature's Cozy Retreats at Chopta Inn</title> */}
        <meta name="description" content="Stay in nature's cozy retreats at Chopta Inn. Explore our top-notch amenities including 24-hour service, daily housekeeping, and more." />
        <meta name="keywords" content="Chopta Inn, accommodation, cozy retreats, nature stay, hotel amenities, breakfast, 24-hour service, security, housekeeping" />
        <meta name="author" content="Chopta Inn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Main Accomodation Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src={chopta}
          alt="Cottage in Chopta"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="container mx-auto py-12 bg-[#133523] bg-opacity-70 relative">
          {/* Section Header */}
          <header className="text-center mb-12" data-aos="fade-down">
            <h6 className="text-lg font-semibold text-yellow-600">ACCOMMODATION</h6>
            <h2 className="text-3xl font-bold mt-4 text-white">Nature's Cozy Retreats Await</h2>
          </header>
          
          {/* Features Section */}
          <div className="flex flex-wrap justify-between">
            {features.map((feature, index) => (
              <article
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Adds a delay for staggered animation
              >
                <a href="#" className="w-full block rounded-lg p-4 transition duration-300 ease-in-out">
                  <div className="flex flex-col items-center bg-[#071f11] bg-opacity-75 p-4 rounded-lg">
                    {/* Icon or Image */}
                    <div className="w-24 h-24 mb-4 flex items-center justify-center">
                      {feature.isIcon ? (
                        <div className="w-30 h-30 text-yellow-500 text-6xl">
                          {feature.icon}
                        </div>
                      ) : (
                        <img
                          src={feature.imgSrc}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    {/* Title and Description */}
                    <h4 className="text-xl font-semibold mb-2 text-yellow-500">{feature.title}</h4>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomodation;
