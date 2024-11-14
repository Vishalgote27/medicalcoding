import React, { useEffect, useState } from 'react';

function Counter() {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [team, setTeam] = useState(0);
    const [offices, setOffices] = useState(0);

    useEffect(() => {
        const incrementCounter = (end, setter, incrementValue = 1, duration = 2000) => {
            let start = 0;
            const incrementTime = duration / (end / incrementValue);

            const increment = () => {
                start += incrementValue;
                setter(start);
                if (start < end) {
                    setTimeout(increment, incrementTime);
                }
            };
            increment();
        };

        incrementCounter(24, setYears);
        incrementCounter(170, setProjects);
        incrementCounter(30, setTeam);
        incrementCounter(38, setOffices);
    }, []);

    return (
        <div className="py-16 bg-white text-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
                    Our Experience by the Numbers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-5xl font-bold text-black">{years}+</h3>
                        <p className="mt-2 text-gray-800">Glorious Years</p>
                    </div>

                    <div className="p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-5xl font-bold text-black">{projects}+</h3>
                        <p className="mt-2 text-gray-800">Completed Projects</p>
                    </div>

                    <div className="p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-5xl font-bold text-black">{team}+</h3>
                        <p className="mt-2 text-gray-800">Team Members</p>
                    </div>

                    <div className="p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-5xl font-bold text-black">{offices}+</h3>
                        <p className="mt-2 text-gray-800">Offices Nationwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
