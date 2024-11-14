import React from 'react'
import { Link } from 'react-router-dom'

const CareerInfo = () => {
    return <>

        <section className="p-8">
            <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
            <p className="text-lg">
                At Our Company, we believe in fostering a culture of innovation, collaboration, and growth. Our team
                members are our most valuable assets, and we are committed to their success.
            </p>
        </section>

        <section className="p-8 bg-white">
            <h2 className="text-3xl font-semibold mb-4">Current Openings</h2>
            {/* Example job listing */}
            <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold">HCC coder
                </h3>
                <p className="text-gray-700">Location:- Remote/ on site
                </p>
                <p className="text-gray-700">
                    We are looking for a Sr medical coder to join our team
                </p>
                <br />
                <Link to="/contact" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Apply Now
                </Link>
            </div>
            {/* Add more job listings as needed */}
        </section>



    </>
}

export default CareerInfo