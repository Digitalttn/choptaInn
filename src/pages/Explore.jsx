import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tunganth from '../assets/tungnath.jpeg';
import tunganth2 from '../assets/Tungnath2.jpg';
import chandrashilla from '../assets/chandrashila.jpg';
import deoria from '../assets/deoriatal.jpg';
import makuu from '../assets/Makkumath.jpg'

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const [showDetails, setShowDetails] = useState({});

  const handleToggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gray-100">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Explore Uttarakhand's Chopta Valley | Chopta to Tungnath</title>
        <link rel="canonical" href="https://www.choptainn.com/explore" />
        <meta name="description" content="Discover the breathtaking beauty of Chopta Valley in Uttarakhand. Explore Tungnath, Chandrashila, and Deoria Taal with stunning views and enriching experiences." />
        <meta name="keywords" content="Chopta Valley, Tungnath, Chandrashila, Deoria Taal,Makku Math Uttarakhand travel, Himalayan trekking, Chopta tourism" />
        <meta name="author" content="Chopta Inn" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Explore Uttarakhand's Chopta Valley | Chopta to Tungnath" />
        <meta property="og:description" content="Discover the breathtaking beauty of Chopta Valley in Uttarakhand. Explore Tungnath, Chandrashila, and Deoria Taal with stunning views and enriching experiences." />
        <meta property="og:image" content={tunganth} />
        <meta property="og:url" content="https://www.example.com/explore" /> {/* Replace with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chopta Inn" />
        <link rel="canonical" href="https://www.example.com/explore" /> {/* Replace with your actual URL */}
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full" data-aos="fade-in" data-aos-duration="1500">
        <img src={tunganth} alt="Tungnath" className="w-full h-[400px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold uppercase">Explore</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 max-w-6xl mx-auto">
        <section className="text-center mb-12" data-aos="fade-up" data-aos-duration="1200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Explore Uttarakhand's Chopta Valley</h2>
          <p className="text-lg text-gray-600">
            Discover the breathtaking beauty of Chopta Valley in Uttarakhand, a serene destination offering stunning views and enriching experiences.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Destination 1 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-right" data-aos-delay="200">
            <img src={tunganth2} alt="Tungnath Temple" className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tungnath</h3>
              <p className="text-gray-600 mb-4">
                The Panch Kedar are the five shrines of Lord Shiva, established by the Shaivite sect. The highest one of them, the Tungnath Temple, is located at a literally breathtaking elevation of 3860 meters.
              </p>
              {showDetails['tungnath'] && (
                <p className="text-gray-600 mb-4">
                  Tungnath Temple is renowned for its incredible location and spiritual significance. It offers panoramic views of the Himalayan peaks, making it a must-visit for nature and spirituality enthusiasts alike.
                </p>
              )}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleToggleDetails('tungnath')}
              >
                {showDetails['tungnath'] ? 'Show Less' : 'See More'}
              </button>
            </div>
          </article>

          {/* Destination 2 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-left" data-aos-delay="400">
            <img src={chandrashilla} alt="Chandrashila Peak" className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ChandraShilla</h3>
              <p className="text-gray-600 mb-4">
                Tungnath, a quaint village in Uttarakhand, is known as the starting point of the popular Chopta Chandrashila Trek. At a height of 2680m, this village is surrounded by evergreen forests of pine, deodar, and rhododendron. This is one of the easier treks in the Himalayan region and hence, recommended for first timers.
              </p>
              {showDetails['chandrashilla'] && (
                <p className="text-gray-600 mb-4">
                  Chandrashila, the summit of the Chandrashila Trek, offers breathtaking 360-degree views of the surrounding peaks and valleys. The trek is ideal for both beginners and experienced hikers looking for an unforgettable adventure.
                </p>
              )}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleToggleDetails('chandrashilla')}
              >
                {showDetails['chandrashilla'] ? 'Show Less' : 'See More'}
              </button>
            </div>
          </article>

          {/* Destination 3 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <img src={deoria} alt="Deoria Taal" className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Deoria Taal</h3>
              <p className="text-gray-600 mb-4">
                The Deoria Tal is located on the Ukhimath-Gopeshwar road, and is reached by a 2 km trek through Sari Village. Visiting the Deoria Tal is a wholesome experience in itself, passing the village and collecting snippets of its daily life through your camera, and if possible, then conversing with the village inhabitants.
              </p>
              {showDetails['deoria'] && (
                <p className="text-gray-600 mb-4">
                  Deoria Taal is known for its pristine beauty and tranquility. The reflection of the surrounding peaks in the lake’s waters creates a mesmerizing view, making it a perfect spot for nature photography and relaxation.
                </p>
              )}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleToggleDetails('deoria')}
              >
                {showDetails['deoria'] ? 'Show Less' : 'See More'}
              </button>
            </div>
          </article>

          {/* Destination 4 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <img src={makuu} alt="Makku Math" className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Makku Math</h3>
              <p className="text-gray-600 mb-4">
                Makku Math Village is located at the elevation of 1600-1700 meters, in Rudraprayag District, of Uttarakhand. This Beautiful historical village Surrounded by the trees of dense cedar, banj, burans, thuner is believed to have preceded the first century. At present this village is a hotspot for birdwatchers. Markendya Temple at Makkumath village is a winter seat of Lord Tungnath ji.
              </p>
              {showDetails['makuu'] && (
                <p className="text-gray-600 mb-4">
                  Makku Math offers a unique blend of historical and natural attractions. The village’s rich heritage, coupled with its scenic surroundings, makes it an excellent destination for history buffs and nature enthusiasts.
                </p>
              )}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleToggleDetails('makuu')}
              >
                {showDetails['makuu'] ? 'Show Less' : 'See More'}
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Explore;
