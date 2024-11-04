import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Filter = ({ onSelectCategory }) => {
    const categories = [
       
        { name: 'AllCalculators', color: 'bg-lime-200' },
        { name: 'AreaCalculators', color: 'bg-pink-200' },
        { name: 'PerimeterCalculators', color: 'bg-orange-200' },
        { name: 'SurfaceAreaCalculators', color: 'bg-yellow-200' },
        { name: 'VolumeCalculators', color: 'bg-sky-200' },
         // { name: '', color: 'bg-purple-200' },
    ];
    
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.name);
        onSelectCategory(category.name);
        navigate('/');
    };

    const formatCategoryName = (name) => {
        return name.replace(/([a-z])([A-Z])/g, '$1 $2');
    };

    return (
        <div className="flex justify-center w-full mt-12">
            <div className="flex flex-col space-y-1 md:flex-row md:space-x-8">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => handleCategoryClick(category)}
                        className={`transition-all duration-200 text-xl tracking-tight font-bold ${selectedCategory === category.name ? `${category.color} py-2 px-4 rounded` : 'hover:scale-105'}`}
                    >
                       {formatCategoryName(category.name)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;
