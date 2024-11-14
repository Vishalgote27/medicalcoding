import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, HealthCare Solutions',
      feedback: "This team's medical coding services have been exceptional. Their accuracy in ICD-10 and CPT coding ensures smooth billing processes and compliance. Highly recommended!",
    },
    {
      name: 'Jane Smith',
      title: 'Founder, MedTech Innovations',
      feedback: "We've been using their services for months, and our billing process has become more streamlined. Their professionalism and attention to detail are top-notch.",
    },
    {
      name: 'Michael Johnson',
      title: 'COO, Global Health Partners',
      feedback: "Their expertise in medical coding has helped us stay compliant and maximize our revenue. The team is reliable and responsive.",
    },
    {
      name: 'Anna Williams',
      title: 'Practice Manager, Wellness Clinic',
      feedback: "Their customer service and accuracy in coding have been invaluable for our practice. They’re very reliable and professional in all aspects of billing.",
    },
    {
      name: 'Robert Brown',
      title: 'Director of Operations, MedPlus',
      feedback: "This team has transformed the way we handle coding and billing. Their proactive approach keeps us compliant at all times.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">What Our Clients Say</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg italic text-gray-700 mb-4">"{testimonials[currentIndex].feedback}"</p>
          <h3 className="text-xl font-semibold text-blue-600">{testimonials[currentIndex].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
