import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaInfoCircle, FaStar } from 'react-icons/fa'; // Importing icons

const HeroSection: React.FC = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661351404790-dd90f03228eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
            <div className="flex flex-col items-center justify-center h-full z-10 text-center text-white p-5">
                <h1 className="text-6xl md:text-7xl font-extrabold mb-12 animate__animated animate__fadeInDown">Welcome to MyStore</h1> {/* Increased margin-bottom */}
                <p className="text-lg md:text-2xl mb-10 animate__animated animate__fadeInUp">
                    Discover the latest trends and exclusive offers tailored just for you!
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                    <Link href="/shop" aria-label="Shop Now">
                        <div className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            <FaShoppingCart className="mr-2" /> <span className="text-lg">Shop Now</span>
                        </div>
                    </Link>
                    <Link href="/about" aria-label="Learn More">
                        <div className="flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            <FaInfoCircle className="mr-2" /> <span className="text-lg">Learn More</span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <div className="text-sm font-semibold">Limited Time Offer!</div>
                    <div className="countdown-timer ml-4 bg-blue-700 bg-opacity-75 p-3 rounded-lg">
                        <span className="text-3xl font-bold">00:59:59</span>
                    </div>
                </div>
                <div className="scroll-indicator mt-5">
                    <span className="text-white text-3xl animate-bounce" role="img" aria-label="Scroll down">⬇️</span>
                </div>
                <div className="mt-8">
                    <Link href="/special-offer" aria-label="Check Out Our Special Offer">
                        <div className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                            Check Out Our Special Offer!
                        </div>
                    </Link>
                </div>

                {/* Why Choose Us Card */}
                <div className="mt-12 p-5 bg-red-600 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                    <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 text-left">
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaStar className="text-yellow-400 mr-2" /> High Quality Products
                        </li>
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaStar className="text-yellow-400 mr-2" /> Excellent Customer Service
                        </li>
                        <li className="flex items-center mb-2 md:mb-0">
                            <FaStar className="text-yellow-400 mr-2" /> Fast Shipping
                        </li>
                    </ul>
                </div>

                {/* Customer Testimonials Card */}
                <div className="mt-8 p-5 bg-red-600 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">What Our Customers Say:</h3>
                    <p className="italic text-gray-300">"MyStore has the best selection and customer service!" - Happy Customer</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;