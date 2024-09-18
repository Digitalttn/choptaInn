import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.avif';
import room4 from '../assets/room4.jpg';
import room5 from '../assets/room5.jpg';

const roomsData = {
  deluxe: {
    title: "Deluxe Room",
    description: "Our Deluxe rooms offer a blend of modern design and comfort with scenic views and elegant furnishings. Perfect for couples or solo travelers.",
    images: [room2, room3],
  },
  superior: {
    title: "Superior Room",
    description: "The Superior rooms provide extra space and luxury, featuring upgraded amenities and beautiful balcony views. Ideal for guests seeking a premium stay.",
    images: [room1, room3],
  },
  suite: {
    title: "Suite",
    description: "Our spacious suites come with separate living areas, premium furnishings, and world-class comfort. Best suited for families or those desiring more space.",
    images: [room4, room5],
  },
};

const RoomPage = () => {
  const [selectedRoom, setSelectedRoom] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const handleRoomClick = (roomType) => {
    setSelectedRoom(roomType);
  };

  const filteredImages = selectedRoom === 'all'
    ? [...roomsData.deluxe.images, ...roomsData.superior.images, ...roomsData.suite.images]
    : roomsData[selectedRoom].images;

  return (
    <div className="font-sans">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Chopta Inn - Room Types | Chopta to Tungnath</title>
        <meta name="description" content="Explore the luxurious rooms at Chopta Inn. Choose from Deluxe, Superior, and Suite rooms with stunning views and premium amenities. Book your stay now!" />
        <meta name="keywords" content="Chopta Inn, deluxe room, superior room, suite, hotel rooms, Chopta to Tungnath, luxury accommodation, Himalayan retreat" />
        <meta name="author" content="Chopta Inn" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Chopta Inn - Room Types | Chopta to Tungnath" />
        <meta property="og:description" content="Explore the luxurious rooms at Chopta Inn. Choose from Deluxe, Superior, and Suite rooms with stunning views and premium amenities. Book your stay now!" />
        <meta property="og:image" content={room1} />
        <meta property="og:url" content="https://www.example.com/rooms" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chopta Inn" />
        <link rel="canonical" href="https://www.example.com/rooms" />
        <meta property="og:image:alt" content="A luxurious room at Chopta Inn with scenic views and elegant furnishings" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${room1})` }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold uppercase" data-aos="fade-up">Our Luxurious Rooms</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        {/* Sidebar: Room Filters and Rules */}
        <div className="w-full md:w-1/4 bg-gray-100 p-6 md:p-8" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Select Room Type</h2>
          <div className="space-y-2 md:space-y-4">
            <button
              className={`w-full py-2 md:py-3 rounded-full font-medium ${selectedRoom === 'all' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleRoomClick('all')}
            >
              All Rooms
            </button>
            <button
              className={`w-full py-2 md:py-3 rounded-full font-medium ${selectedRoom === 'deluxe' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleRoomClick('deluxe')}
            >
              Deluxe Room
            </button>
            <button
              className={`w-full py-2 md:py-3 rounded-full font-medium ${selectedRoom === 'superior' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleRoomClick('superior')}
            >
              Superior Room
            </button>
            <button
              className={`w-full py-2 md:py-3 rounded-full font-medium ${selectedRoom === 'suite' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => handleRoomClick('suite')}
            >
              Suite
            </button>
          </div>

          {/* Rules and Regulations */}
          <div className="mt-8" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Rules & Regulations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Check-in: 2 PM</li>
              <li>Check-out: 11 AM</li>
              <li>No smoking in rooms</li>
              <li>Pets allowed in designated areas</li>
              <li>Free Wi-Fi in all rooms</li>
            </ul>
          </div>
        </div>

        {/* Main Content: Room Images */}
        <div className="w-full md:w-3/4 p-6 md:p-8" data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Room Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div key={index} className="relative" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                <img
                  src={img}
                  alt={`Room ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
