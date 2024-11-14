import React from 'react';
import bgImage from '../assets/heroimg.jpg'; // Replace with your image path
import { Link } from 'react-router-dom';

const Bgfix = () => {
  return (
    <section 
      className="relative w-full h-[60vh] bg-cover bg-center bg-fixed" // Reduced height to 60vh and added bg-fixed
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay with stronger opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Increased opacity for more darkness */}

      {/* Content on top of the background image */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white px-6">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Expert Medical Coding Services</h2>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
            We provide accurate and efficient coding services to ensure proper documentation, compliance, and reimbursement for healthcare providers.
          </p>
          <Link
 to="/services"
className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bgfix;
