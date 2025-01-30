import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Filter = ({ onSelectCategory }) => {
    const allCategories = [
        { label: 'All', route: 'AllCalculators' },
        { label: 'Area', route: 'AreaCalculators' },
        { label: 'Perimeter', route: 'PerimeterCalculators' },
        { label: 'Surface Area', route: 'SurfaceAreaCalculators' },
        { label: 'Volume', route: 'VolumeCalculators' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const handleCategoryClick = (category, index) => {
        setActiveIndex(index);
        onSelectCategory(category.route); 
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center w-full max-w-screen-lg mx-auto my-6">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2 text-xs md:text-sm font-mono text-center w-fit">
                {allCategories.map((category, index) => (
                    <Link
                        key={index}
                        to="/"
                        onClick={() => handleCategoryClick(category, index)}
                        className={`flex-1 py-1 px-2 rounded border border-black tracking-wide uppercase min-w-[150px] ${
                            index === activeIndex
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-black hover:text-white'
                        }`}
                    >
                        {category.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Filter;
