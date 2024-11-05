"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <img src="https://marketplace.canva.com/EAF6ICBwJ7U/1/0/1600w/canva-blue-and-white-circle-retail-logo-jWnP4G7rjfI.jpg" alt="MyStore Logo" className="logo-image" />
                </Link>
            </div>
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div className="cart">
                <Link href="/cart" className="cart-link">🛒 Cart (0)</Link>
            </div>
            <div className="user-actions">
                <button onClick={toggleDropdown} className="user-button">
                    Account
                </button>
                {isDropdownOpen && (
                    <div className="dropdown">
                        <Link href="/login" className="dropdown-link">Login</Link>
                        <Link href="/register" className="dropdown-link">Register</Link>
                    </div>
                )}
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." aria-label="Search products" className="search-input" />
                <button type="submit" className="search-button">🔍</button>
            </div>
        </header>
    );
};

export default Header;