import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const testimonials = [
  {
    name: "Sameer bani",
    comment: "Our stay was absolutely amazing! The staff was incredibly helpful and the scenery was breathtaking.",
    rating: 5,
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Pinky Singh",
    comment: "A perfect getaway! We enjoyed every moment, from the comfortable rooms to the beautiful outdoor activities.",
    rating: 4,
    imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Abhilash",
    comment: "The hiking trails were fantastic, and the serene environment helped us unwind. Will definitely come back!",
    rating: 5,
    imgSrc: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Lovely kaur",
    comment: "The service was excellent, and the activities kept our family entertained throughout the stay.",
    rating: 4,
    imgSrc: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Read reviews from our guests about their experiences with us. Our guests highlight exceptional service, beautiful scenery, and memorable activities." />
        <meta name="keywords" content="guest reviews, hotel testimonials, customer feedback, hotel experience, travel reviews" />
        <meta name="author" content="Travel To Nirvana" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Guest Reviews | Travel To Nirvana" />
        <meta property="og:description" content="Explore guest reviews for Travel To Nirvana. Our customers share their experiences, highlighting exceptional service and unforgettable stays." />
        <meta property="og:image" content="URL to a representative image of guest reviews" />
        <meta property="og:url" content="https://traveltonirvana.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-12 bg-gradient-to-r from-yellow-600 via-green-900 to-green-800">
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-yellow-600" data-aos="fade-down">GUEST REVIEWS</h6>
          <h2 className="text-4xl font-bold mt-2 text-white" data-aos="fade-up">What Our Guests Say</h2>
          <p className="mt-4 text-white max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Hear from our valued guests about their experiences staying with us. We pride ourselves on offering top-notch service and memorable adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Stagger animation delay based on index
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full shadow-lg mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
