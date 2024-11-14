import React from 'react';
import aboutImage from '../assets/HeroAbout.jpg'; // Import the image at the top
import { Link } from 'react-router-dom';

const NewAbout = () => {
  return (
    <>

      {/* Section About End */}

      {/* Section About Info Start */}




      <section className="about-info section py-20 px-6 bg-gray-100">
        <div className="container mx-auto max-w-screen-xl px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Section */}
            <div className="text-left space-y-8">
              <span className="text-lg font-semibold text-blue-500 uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6 leading-snug text-gray-800">
                We are a dynamic team of creative people
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl text-gray-600 leading-relaxed">
                We provide consulting services in the area of IFRS and management reporting, helping companies reach their highest potential. We optimize business processes, making them more efficient and easy to manage.
              </p>
              <Link to="/About" className="inline-block px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-equipment_23-2149611201.jpg?t=st=1731560361~exp=1731563961~hmac=aba09663fb484143c33f20bc3b29289f5d2c865aae9bb0c328c11aa28f93cc43&w=900"
                alt="About Us"
                className="rounded-lg shadow-2xl max-w-full lg:max-w-lg transform hover:scale-105 transition duration-300"
              />
            </div>

          </div>
        </div>
      </section>



    </>
  );
};

export default NewAbout;
