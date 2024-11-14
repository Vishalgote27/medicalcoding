import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const FormContact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data through EmailJS
    // 'service_u98i2tf', 'template_e2y1ny1', formDataWithFile, '5Fc-PpFe0ogJe2QCC'
    emailjs.sendForm('service_u98i2tf', 'template_e2y1ny1', formRef.current, '5Fc-PpFe0ogJe2QCC')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <>
      <div className="py-10 bg-gray-50">
        <div className="text-center p-5">
          <h2 className="text-4xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-gray-500">Stay connected and stay healthy</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch p-8 md:p-16 rounded-lg space-y-8 md:space-y-0 md:space-x-8">

          {/* Contact Info Section */}
          <div className="bg-blue-500 text-white p-8 rounded-lg w-full md:w-2/4 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className="mb-6 text-gray-200">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
            <div className="space-y-4 flex-grow">
              {/* Location */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p>Near lane no.-7 Pundlik Nagar</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaPhoneAlt className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p>+91 9689213168</p>
                  <p>+91 8622002100</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaEnvelope className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-sm">office@shivhealthcaresolutions.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Form */}
          <div className="bg-white p-8 rounded-lg w-full md:w-4/5 shadow-lg flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <form ref={formRef} className="space-y-4 flex-grow" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input type="text" name="name" placeholder="Your Name" className="w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" className="w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
              </div>
              <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
              <textarea name="message" placeholder="Message" className="w-full p-3 border rounded-lg h-32 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange}></textarea>
              <input type="file" name="resume" accept="application/pdf" className="w-full p-3 border rounded-lg shadow-sm" />
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default FormContact;













// emailjs.sendForm('service_u98i2tf', 'template_e2y1ny1', formDataWithFile, '5Fc-PpFe0ogJe2QCC')
<div className="bg-blue-500 text-white p-8 rounded-lg w-full md:w-1/4 mb-8 md:mb-0 md:mr-8 flex flex-col">
  <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
  <p className="mb-6">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
  <div className="space-y-4 flex-grow">
    <div>
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 4.582 10.74 6.388 13.214.379.531 1.157.531 1.536 0C14.418 19.74 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 18.301C10.548 17.759 7 12.726 7 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 3.726-3.548 8.759-5 11.301z" />
            <path d="M11 7h2v2h-2zM11 11h2v4h-2z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold">Our Location</p>
          <p>Near lane no.-7 Pundlik nagar</p>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 15.502c-1.104 0-2 .896-2 2s.896 2 2 2c1.104 0 2-.896 2-2s-.896-2-2-2zM17.998 4h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold">Phone Number</p>
          <p>+91 9689213168
          </p>
          <p>+91   8622002100</p>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 4H2v16h20V4zM20 6v1l-8 5.5L4 7V6l8 5.5L20 6z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold ">Email Address</p>
          <p className='text-sm'>office@shivhealthcaresolutions.com </p>
          {/* <p>contact@example.com</p> */}
        </div>
      </div>
    </div>
  </div>
</div>