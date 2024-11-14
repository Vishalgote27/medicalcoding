import React from 'react'
import { FaShieldAlt, FaLock, FaUserShield, FaFileSignature } from 'react-icons/fa';

const OurServces = () => {
    const services = [
        {
            title: "Data Protection",
            description: "Safeguarding critical data through encryption, secure access, and monitoring.",
            icon: <FaShieldAlt size={40} className="text-blue-600" />
        },
        {
            title: "Compliance Management",
            description: "Ensuring regulatory compliance and industry-standard security practices.",
            icon: <FaFileSignature size={40} className="text-blue-600" />
        },
        {
            title: "Threat Detection & Response",
            description: "Proactively identifying and mitigating security threats in real-time.",
            icon: <FaLock size={40} className="text-blue-600" />
        },
        {
            title: "Identity & Access Management",
            description: "Controlling and managing secure access for authorized personnel.",
            icon: <FaUserShield size={40} className="text-blue-600" />
        },
    ];

    return (
        <>
            <section className="py-16 px-6 lg:px-12 xl:px-20">
                <div className="container mx-auto text-center">

                    {/* Header Section */}
                    <h2 className="text-4xl font-bold text-black mb-6 md:mb-8"> Information Security</h2>
                    <p className="text-lg text-gray-700 mb-10 md:mb-12">
                        Protecting your business data with advanced security solutions to maintain confidentiality, integrity, and availability.
                    </p>

                    {/* Services Section */}
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default OurServces;
