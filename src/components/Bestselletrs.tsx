"use client";
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number; // Price of the product
    rating: number; // Average rating of the product
}

interface BestSellersProps {
    initialProducts: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ initialProducts }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts || []);
    const [visibleCount, setVisibleCount] = useState<number>(3); // Number of products to display initially

    const handleViewMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 3, products.length)); // Show 3 more products, but not exceeding total
    };

    return (
        <div className="best-sellers p-4">
            <h2 className="text-3xl font-extrabold mb-4 text-center text-black tracking-wide">Best Sellers</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.slice(0, visibleCount).map(product => (
                    <div key={product.id} className="product-card transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden border border-gray-200 bg-white relative">
                        <a href={`/products/${product.id}`} aria-label={`View ${product.name}`} className="block">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }} // Placeholder for broken images
                                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" 
                            />
                            <h3 className="text-lg font-semibold mt-2 text-black text-center">{product.name}</h3>
                            <p className="text-gray-600 text-center">{product.description}</p>
                            <p className="text-2xl font-bold text-black text-center mt-2">${product.price.toFixed(2)}</p>
                            <p className="text-gray-500 text-center">Rating: {product.rating} ⭐</p>
                            {product.rating >= 4.5 && (
                                <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold py-1 px-2 rounded-full">Top Rated</span>
                            )}
                        </a>
                    </div>
                ))}
            </div>
            {visibleCount < products.length && (
                <div className="text-center mt-6">
                    <button onClick={handleViewMore} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg transform hover:scale-105">
                        View More Best Sellers
                    </button>
                </div>
            )}
        </div>
    );
};

export default BestSellers;