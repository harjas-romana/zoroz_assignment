"use client";
import React from 'react';

interface Category {
    id: number;
    name: string;
    image: string;
    description: string; // New field for category description
    productCount: number; // New field for number of products
    isNew?: boolean; // Optional field for new category badge
}

interface FeaturedCategoriesProps {
    categories: Category[];
    loading?: boolean;
    error?: string;
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ categories, loading, error }) => {
    if (loading) {
        return (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="category-card skeleton">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text short"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <p>Error loading categories: {error}</p>;
    }

    return (
        <div className="featured-categories p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Featured Categories</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categories.map(category => (
                    <div key={category.id} className="category-card transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden border border-gray-200 bg-white relative">
                        <a href={`/categories/${category.id}`} aria-label={`View ${category.name} category`} className="block">
                            {category.isNew && <span className="badge absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">New</span>}
                            <img 
                                src={category.image} 
                                alt={category.name} 
                                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png'; }} // Placeholder for broken images
                                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" 
                            />
                            <h3 className="text-lg font-semibold mt-2 text-center text-black">{category.name}</h3>
                            <p className="text-gray-600 text-center">{category.description}</p>
                            <p className="text-gray-500 text-center">{category.productCount} products available</p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <a href="/categories" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg transform hover:scale-105">
                    View More Categories
                </a>
            </div>
        </div>
    );
};

export default FeaturedCategories;