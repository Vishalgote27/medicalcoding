import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'O & M Services',
    description:
      'Operations and management service is an extended solution for remote location management.',
    icon: 'M19 3h-2a4 4 0 0 0-8 0H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
  },
  {
    title: 'Call Center',
    description:
      'We provide best in the class centre services and solutions business calls.',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  },
  {
    title: 'TI & BTS Work',
    description:
      'Our support is tailored to customer requirements and has the flexibility to implement and manage key projects that are part of our ongoing operations.',
    icon: 'M12 2l1.5 5h5l-4 3 1.5 5-4-3-4 3L7 10l-4-3h5L12 2z',
  },
  {
    title: 'Customer Support Center',
    description:
      'Customer Service helps to resolve a customer\'s ad hoc challenges, questions, and concerns relating to a product or service.',
    icon: 'M6 2a6 6 0 0 1 12 0v12a6 6 0 0 1-12 0V2zm10 12V2a4 4 0 1 0-8 0v12a4 4 0 1 0 8 0z',
  },
  {
    title: 'Manpower & Training',
    description:
      'A manpower agency will find talent for your company, after which services of the agency will end once you hire the talent.',
    icon: 'M3 12h18m-9-9v18M6 6h12',
  },
  {
    title: 'Tower Installation',
    description:
      'Towers are specifically distinguished from "buildings" in that they are not built to be habitable but to serve other functions.',
    icon: 'M3 3l18 18M3 21L21 3',
  },
];

const ServicesCard = () => {
  return (
    <section className="py-20 px-6 ">
      <div className="container mx-auto max-w-screen-xl px-8 lg:px-16">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
          Our Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-block px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
