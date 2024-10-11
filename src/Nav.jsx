import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = ({ onSelectCategory }) => {
    const categories = [
        { name: 'All Calculators', color: 'bg-lime-200' },
        { name: 'Area Calculators', color: 'bg-blue-200' },
        { name: 'Conversion Calculators', color: 'bg-orange-200' },
        { name: 'Volume Calculators', color: 'bg-pink-200' },
    ];
    
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.name);
        onSelectCategory(category.name);
        navigate('/');
    };

    return (
        <nav className="flex justify-center w-full my-6">
            <div className="flex flex-col space-y-1 md:flex-row md:space-x-8">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => handleCategoryClick(category)}
                        className={`transition-all duration-200 ${selectedCategory === category.name ? `${category.color} py-2 px-4 rounded` : 'hover:scale-105'}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
