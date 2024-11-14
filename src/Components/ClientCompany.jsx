import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const ClientCompany = () => {
    const settings = {
        dots: false, // Show pagination dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 5, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Auto-play
        autoplaySpeed: 1000, // Time between slides
        responsive: [
            {
                breakpoint: 768, // Medium devices
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Small devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return <>
        <div className="trusted-by-container p-4  overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-6">Trusted By</h2>
            <Slider {...settings}>
                {/* Replace with your image paths */}
                <div className="p-4">
                    <img src="https://cdn.shopify.com/s/files/1/2436/6857/files/Tech_Mahindra.svg?v=1721135642" alt="Brand 1" className="mx-auto h-20" />
                </div>
                <div className="p-4">
                    <img src="https://cdn.shopify.com/s/files/1/2436/6857/files/logo-47.svg?v=1721734690" alt="Brand 2" className="mx-auto h-20" />
                </div>
                <div className="p-4">
                    <img src="https://cdn.shopify.com/s/files/1/2436/6857/files/logo-47.svg?v=1721734690" alt="Brand 3" className="mx-auto h-20" />
                </div>
                <div className="p-4">
                    <img src="https://cdn.shopify.com/s/files/1/2436/6857/files/Titan.svg?v=1721135664" alt="Brand 4" className="mx-auto h-20" />
                </div>
                <div className="p-4">
                    <img src="https://cdn.shopify.com/s/files/1/2436/6857/files/Uber.svg?v=1721135669" alt="Brand 5" className="mx-auto h-20" />
                </div>
            </Slider>
        </div>
    </>
}

export default ClientCompany
