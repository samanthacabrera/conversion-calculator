import React, { useState } from 'react';

const Nav = ({ onSelectCategory }) => {
    const categories = ['Common Converters', 'Engineering Converters', 'Financial Converters'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
        setIsOpen(false); 
    };

    return (
        <nav className="absolute top-0 left-0 p-4">
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
                                className="block hover:scale-105 transition duration-300 pl-10 py-2 text-left w-full"
                            >
                                {category}
                            </button>
                        ))}
                </div>
            )}
        </nav>
    );
};

export default Nav;
