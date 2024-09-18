import React, { useEffect,useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';
import cottage from '../assets/cottage.jpeg'
import direct from '../assets/direact.jpeg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Lastname: "",
    Email: "",
    PhoneNumber:"",
    Message:""
  });
  const form = useRef();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,[name]:value,
    })

  }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('From data:',formData)

    emailjs
      .sendForm('service_9l72kpx', 'template_jes7r5x', form.current,
       'S4eUT_qK8sVFfyeoF'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({
            Name:"",
            Lastname:"",
            Email:"",
            PhoneNumber:"",
            Message:""
          })
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <main className="mb-20 bg-[#f6f3f4]">
      
<Helmet>
        <title>Contact Us - Chopta Inn</title>
        <link rel="canonical" href="https://www.choptainn.com/contact" />
        
        <meta name="description" content="Get in touch with Chopta Inn for bookings and inquiries. Contact us for a memorable stay in Chopta, Uttarakhand." />
        <meta name="keywords" content="Chopta Inn, contact, hotel, bookings, Chopta, Uttarakhand, Travel To Nirvana" />
        <meta property="og:title" content="Contact Us - Chopta Inn" />
        <meta property="og:description" content="Reach out to Chopta Inn for your booking needs or inquiries about our facilities in Chopta, Uttarakhand." />
        <meta property="og:image" content={cottage} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img src={cottage} alt="Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider  uppercase" data-aos="fade-up">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto my-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:order-2 bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <i className="bi bi-geo-alt text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Hotel Address</h4>
                  <p className="text-gray-700">
                    Chopta Inn ,Makku Math,chopta<br />
                    Rudraprag, Uttarakhand 246453
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <i className="bi bi-geo-alt text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Sales Office Address</h4>
                  <p className="text-gray-700">
                    Shop 2 & 3, Second Floor, Surya Complex, Ranipur More Haridwar, Uttarakhand<br />
                    Pin Code – 249401
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <i className="bi bi-envelope-paper text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Email Address</h4>
                  <p className="text-gray-700">
                    <a href="mailto:salesinfo@traveltonirvana.com" className="text-blue-600">
                      salesinfo@traveltonirvana.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <i className="bi bi-telephone text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Telephone</h4>
                  <p className="text-gray-700">
                    +91 9258126088, +91 9258126089, +91 9389301916<br />
                    <small>Monday to Saturday 10am - 6pm</small>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 rounded-lg" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail} id="contactform" autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:border-blue-600 focus:outline-none"
                    id="name_contact"
                    placeholder="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name_contact" className="form-label inline-block mb-2 text-gray-700">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:border-blue-600 focus:outline-none"
                    id="lastname_contact"
                    placeholder="Last Name"
                    name="Lastname"
                    value={formData.Lastname}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="lastname_contact" className="form-label inline-block mb-2 text-gray-700">Last Name</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:border-blue-600 focus:outline-none"
                    id="email_contact"
                    placeholder="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email_contact" className="form-label inline-block mb-2 text-gray-700">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:border-blue-600 focus:outline-none"
                    id="phone_contact"
                    placeholder="Phone"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="phone_contact" className="form-label inline-block mb-2 text-gray-700">Telephone</label>
                </div>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:border-blue-600 focus:outline-none"
                  id="message_contact"
                  name="Message"
                  placeholder="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
                <label htmlFor="message_contact" className="form-label inline-block mb-2 text-gray-700">Message</label>
              </div>
    
              <button
                type="submit"
                className="btn_1 outline lg:w-[20%] py-3 px-6 bg-green-900 text-white rounded-lg hover:bg-black transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="relative w-full max-w-screen-lg mx-auto">
  <div className="w-full h-[500px] flex items-center justify-center overflow-hidden">
    <img src={direct} className="w-full h-full object-cover" alt="Description" />
  </div>
</section>


    </main>
  );
};

export default ContactUs;
