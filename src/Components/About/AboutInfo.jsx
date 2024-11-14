import React from 'react';
import { FaRegHandshake, FaTasks, FaCheckCircle } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaStethoscope, FaHeartbeat, FaBriefcaseMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
    const services = [
        {
            title: "Providers & Payers",
            description: "Supporting healthcare providers and payers with comprehensive solutions.",
            icon: "🏥"
        },
        {
            title: "Pharma",
            description: "Delivering pharmaceutical innovations with reliable solutions.",
            icon: "💊"
        },
        {
            title: "Medico-Legal",
            description: "Combining medical expertise with legal precision for unique services.",
            icon: "⚖️"
        },
        {
            title: "Health Tech",
            description: "Transforming healthcare with advanced technology solutions.",
            icon: "🔬"
        },
    ];

    return (
        <>
            {/* About Us Section */}
            <section className="bg-white py-20 px-6 md:px-16 lg:px-28">
                <div className="max-w-6xl mx-auto text-center lg:text-left">

                    {/* Side-by-Side Section with Photo */}
                    <div className="mb-12 lg:flex lg:items-center lg:gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21198.jpg"
                                alt="Our Team"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 text-start">
                            <h3 className="text-3xl text-start sm:text-4xl font-bold text-black mb-6">
                                Dedicated to Your Success
                            </h3>
                            <p className="text-lg text-start sm:text-xl text-gray-700 mb-6">
                                With years of experience and a commitment to excellence, our team
                                is here to help you turn your vision into reality. We take pride in
                                delivering solutions that are not only effective but also align
                                with your unique needs.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300"
                            >
                                Connect with Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Let’s See What We Do</h2>
                    <p className="text-lg text-gray-600 mt-2">Explore our services to see how we can support your needs</p>
                </div>

                <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-all hover:scale-105 hover:shadow-xl">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="bg-gray-100 py-10 px-4 md:py-20 md:px-8">
                <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-10">Who We Are</h2>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0">

                        {/* Icon Section */}
                        <div className="md:w-1/2 flex justify-center md:justify-start space-x-4 md:space-x-6">
                            {[{
                                icon: <FaStethoscope size={36} className="md:size-[48px]" />,
                                label: "Healthcare Expertise"
                            },
                            {
                                icon: <FaHeartbeat size={36} className="md:size-[48px]" />,
                                label: "Life Sciences Focus"
                            },
                            {
                                icon: <FaBriefcaseMedical size={36} className="md:size-[48px]" />,
                                label: "Tech Innovation"
                            }].map(({ icon, label }, index) => (
                                <div key={index} className="flex flex-col items-center text-blue-600">
                                    <div className="bg-blue-500 text-white p-6 md:p-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                                        {icon}
                                    </div>
                                    <p className="mt-2 md:mt-4 font-semibold text-sm md:text-lg">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Text Content */}
                        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
                            <p className="text-sm md:text-md text-start text-gray-700 leading-relaxed">
                                We are a <span className="font-bold text-blue-600">Techno KPO</span> delivering domain-specific solutions through a unique, innovation-driven model. Our expertise spans across the
                                <span className="font-bold text-blue-600"> Healthcare</span>, <span className="font-bold text-blue-600">Lifesciences</span>, and
                                <span className="font-bold text-blue-600"> Health Tech</span> sectors, empowering our clients to excel in a dynamic industry landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutInfo;
