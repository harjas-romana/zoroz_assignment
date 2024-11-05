import React from 'react';
import { FaTag } from 'react-icons/fa';

const PromotionalArea: React.FC = () => {
    return (
        <div className="relative bg-white text-blue-600 p-4 rounded-lg shadow-lg overflow-hidden w-1/3 h-48 flex flex-col justify-center mx-auto mt-10">
            <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
            <div className="relative z-10 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-1 flex items-center justify-center animate__animated animate__fadeInDown">
                    <FaTag className="mr-2" /> Special Offer!
                </h2>
                <p className="text-sm md:text-lg mb-2 animate__animated animate__fadeInUp">
                    Get 20% off on your first purchase!
                </p>
                <button className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg transform hover:scale-105">
                    Shop Now
                </button>
            </div>
            <div className="mt-2 animate__animated animate__fadeInUp text-center">
                <span className="text-xs">Hurry! Offer ends in:</span>
                <div className="text-lg md:text-xl font-bold bg-blue-200 p-1 rounded-lg mt-1">
                    00:59:59
                </div>
            </div>
        </div>
    );
};

export default PromotionalArea;