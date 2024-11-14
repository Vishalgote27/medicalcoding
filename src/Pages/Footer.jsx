import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/newLogo4.png';
import logo2 from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <img src={logo} className="mr-5 h-20 sm:h-40" alt="logo" />

                            <div className="flex mt-8 space-x-6 text-gray-600">
                                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                                    <span className="sr-only">Dribbble</span>
                                    <FaDribbble className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p className="font-medium text-lg text-gray-800">Quick Links</p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <Link className="hover:text-gray-700 transition-all" to="/">Home</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/about">About</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/services">Our Services</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/contact">Contact Us</Link>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium text-lg text-gray-800">Our Services</p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <Link className="hover:text-gray-700 transition-all" to="/services">Medical Coding</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/services">Medical Billing</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/services">Prescription Digitization</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/services">EHR Data Management</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/services">Clinical Research Summarization</Link>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium text-lg text-gray-800">Helpful Links</p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <Link className="hover:text-gray-700 transition-all" to="/contact">Contact</Link>
                                    <Link className="hover:text-gray-700 transition-all" to="/career">Career</Link>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium text-lg text-gray-800">Contact</p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <p className="text-gray-600">Call Us: <span className="font-semibold">+91 9689213168
                                    </span></p>
                                    <p className="text-gray-600">Email: <span className="font-semibold">info@medicalcoding.com</span></p>
                                    <p className="text-gray-600">Address: <span className="font-semibold">Near lane no.-7 Pundlik nagar</span></p>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Flex container for logo and copyright text */}
                    <div className="mt-8 flex items-center justify-center text-xs text-gray-800">
                        <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
                        <div className="flex items-center space-x-2">
                            {/* Logo (if any) */}
                            <img src={logo2} alt="Logo" className="h-6 sm:h-9" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
