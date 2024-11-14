import React from 'react';
import contactImage from '../../assets/ServicesHero.png'; // Make sure to replace this with your actual image path

const ServicesHero = () => {
  return (
    <section
      className="relative h-[300px] sm:h-[300px] md:h-[350px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Centered in the middle */}
      <div className="absolute inset-0 flex justify-center items-end sm:items-center text-center text-white px-4">
        <div className="transform scale-100 sm:scale-90 md:scale-95 lg:scale-100">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Our Services
          </h1>
        </div>
      </div>
    </section>

  );
};

export default ServicesHero;
