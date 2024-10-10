import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = ({ onSelectCategory }) => {
    const categories = ['All Calculators', 'Area Calculators', 'Conversion Calculators', 'Volume Calculators'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
        navigate('/');
        setIsOpen(false);
    };

    return (
        <nav className="flex justify-center w-full">
            {/* Desktop */}
            <div className="hidden lg:flex lg:flex-col">
                <button
                onClick={() => setIsOpen(!isOpen)} 
                className="transition duration-300 focus:outline-none flex items-center"
            >
                
                <svg
                    className={`mr-2 w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>{selectedCategory}</span>
            </button>

            {isOpen && (
                <div>
                    {categories
                        .filter(category => category !== selectedCategory) 
                        .map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className="block hover:underline transition duration-300 pl-10 py-2 text-left tracking-wide w-full"
                            >
                                {category}
                            </button>
                        ))}
                </div>
                )}
            </div>

            {/* Mobile */}
            <div className="absolute top-0 left-0 lg:hidden">
                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 m-1 z-20 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-sky-100 flex flex-col items-center justify-center z-10">
                        <div className="mb-12 text-center text-xl tracking-wider">
                            Select a category to get started 
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`block px-4 py-2 hover:underline ${selectedCategory === category ? 'font-semibold' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
