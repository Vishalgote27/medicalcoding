import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHospital, FaFileMedical, FaMoneyCheckAlt, FaNotesMedical, FaClinicMedical, FaUserMd } from 'react-icons/fa'; // Example icons

const services = [
  {
    title: 'RCM Services',
    description: 'Revenue Cycle Management services ensuring efficient financial operations for healthcare providers.',
    icon: <FaMoneyCheckAlt className="w-16 h-16 text-blue-600" />, // Replace with appropriate icon
  },
  {
    title: 'Medical Coding',
    description: 'Accurate medical coding services for all healthcare billing needs, ensuring compliance and efficiency.',
    icon: <FaFileMedical className="w-16 h-16 text-blue-600" />,
  },
  {
    title: 'Medical Billing',
    description: 'Comprehensive medical billing solutions to optimize reimbursement and streamline payment processing.',
    icon: <FaRegHospital className="w-16 h-16 text-blue-600" />,
  },
  {
    title: 'A/R Denial Management',
    description: 'Efficient denial management services to recover claims and optimize the accounts receivable process.',
    icon: <FaNotesMedical className="w-16 h-16 text-blue-600" />,
  },
  {
    title: 'CDI Services',
    description: 'Clinical Documentation Improvement services to enhance accuracy and compliance in clinical records.',
    icon: <FaClinicMedical className="w-16 h-16 text-blue-600" />,
  },
  {
    title: 'Clinical Services',
    description: 'Providing professional clinical services for healthcare institutions to ensure quality patient care.',
    icon: <FaUserMd className="w-16 h-16 text-blue-600" />,
  },
];

const ServicesCard = () => {
  return (
    <section className="py-20 px-6">
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
                {service.icon}
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
