import React from 'react';
import heroImage from '../assets/NewHero.jpg';  // Image for larger screens
import heroImageMobile from '../assets/mobilview.png'; // Image for mobile screens

const HeroPage = () => {
  return (
    <section className="relative h-screen">
      {/* Image for mobile screens */}
      <img
        src={heroImageMobile}
        alt="Hero Mobile"
        className="w-full h-full object-cover md:hidden mt-16" // Only show on mobile (sm)
      />

      {/* Image for larger screens */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover hidden md:block" // Only show on medium and larger screens
      />

      {/* Optional overlay */}
    </section>
  );
};

export default HeroPage;
