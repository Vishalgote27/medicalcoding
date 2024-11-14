import React from 'react';

const servicesData = [
    {
        image: 'https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?t=st=1731508568~exp=1731512168~hmac=a50f77bbff53d77903daa9dd8b0cfc72417f51b4e5af7e5f59b5c380273c2b6f&w=1060',
        title: 'Infra Services',
        description: 'Get in touch with top healthcare professionals for expert advice and care.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/smiling-medical-team-analyzing-xray_13339-97022.jpg?w=900',
        title: 'BPO Services',
        description: 'Quick and easy access to a wide range of medications and healthcare products.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/confident-young-caucasian-female-doctor-white-medical-uniform-sit-desk-working-computer-smiling-use-laptop-write-medical-journal_1070994-6879.jpg?w=900',
        title: 'Software Services',
        description: 'High-quality, safe, and effective surgical solutions with expert care.',
    },
    {
        image: 'https://img.freepik.com/free-photo/colleagues-lab-doing-experiments_23-2148939082.jpg?t=st=1731509210~exp=1731512810~hmac=099721e9aba6e90dab3affd4873854c61e3b061f1c0d643e7ae7794851b144e0&w=900',
        title: 'Healthcare Services',
        description: 'Supportive rehabilitation services for faster recovery and wellness.',
    },
];

const ServicesInfo = () => {
    return <>
        <section className="py-16 px-4 md:px-8 lg:px-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
                    Our Key Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>






    </>
};

export default ServicesInfo;


// export default ServicesInfo