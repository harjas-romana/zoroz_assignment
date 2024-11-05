"use client";
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa'; // Importing quote icon

const testimonialsData = [
    {
        name: "Jane Doe",
        testimonial: "Great products and fast shipping!",
        rating: 5,
        image: "https://picsum.photos/seed/jane/200/200", // Random image for Jane
        location: "New York, NY"
    },
    {
        name: "John Smith",
        testimonial: "I love shopping here!",
        rating: 4,
        image: "https://picsum.photos/seed/john/200/200", // Random image for John
        location: "Los Angeles, CA"
    },
    {
        name: "Emily Johnson",
        testimonial: "Exceptional customer service and quality!",
        rating: 5,
        image: "https://picsum.photos/seed/emily/200/200", // Random image for Emily
        location: "Chicago, IL"
    },
    {
        name: "Michael Brown",
        testimonial: "A fantastic shopping experience!",
        rating: 5,
        image: "https://picsum.photos/seed/michael/200/200", // Random image for Michael
        location: "Miami, FL"
    },
    {
        name: "Sarah Wilson",
        testimonial: "I highly recommend this store!",
        rating: 4,
        image: "https://picsum.photos/seed/sarah/200/200", // Random image for Sarah
        location: "Seattle, WA"
    },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const { name, testimonial, rating, image, location } = testimonialsData[currentIndex];

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white relative">
            <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
            <div className="flex flex-col items-center">
                <div className="relative bg-white text-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <FaQuoteLeft className="absolute text-gray-300 text-5xl left-4 top-4" />
                    <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold text-center">{name}</h3>
                    <div className="flex justify-center text-yellow-500 mb-2">
                        {Array.from({ length: rating }, (_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-center italic">"{testimonial}"</p>
                    <p className="text-center text-sm text-gray-500">{location}</p>
                </div>
                <div className="flex justify-between w-full mt-4">
                    <button onClick={prevTestimonial} className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Previous
                    </button>
                    <button onClick={nextTestimonial} className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;