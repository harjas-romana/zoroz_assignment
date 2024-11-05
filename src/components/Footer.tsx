"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubscribe = () => {
        if (email) {
            setFeedback('Thank you for subscribing!');
            setEmail('');
            setTimeout(() => setFeedback(''), 3000); // Clear feedback after 3 seconds
        } else {
            setFeedback('Please enter a valid email address.');
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div>
                    <h4 className="text-xl font-bold mb-2">About Us</h4>
                    <p className="text-gray-400">We are committed to providing the best products and services.</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Quick Links</h4>
                    <ul>
                        <li><a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                        <li><a href="/faq" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="flex">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Subscribe to our newsletter"
                            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                            aria-label="Email for newsletter subscription"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                    {feedback && (
                        <p className={`mt-2 ${feedback.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                            {feedback}
                        </p>
                    )}
                </div>
            </div>
            <div className="text-center mt-8">
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                >
 Back to Top
                </button>
            </div>
            <p className="text-center mt-4 text-gray-400">&copy; 2024 MyStore. All rights reserved.</p>
        </footer>
    );
};

export default Footer;