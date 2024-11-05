import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Filter = ({ onSelectCategory }) => {
    const backgroundColors = ['bg-lime-200', 'bg-orange-200', 'bg-sky-200'];

    const allCategories = [
        { name: 'AllCalculators', color: 'bg-lime-200' },
        { name: 'AreaCalculators', color: 'bg-pink-200' },
        { name: 'DistanceCalculators', color: 'bg-yellow-200' },
        { name: 'PercentageCalculators', color: 'bg-sky-200' },
        { name: 'PerimeterCalculators', color: 'bg-orange-200' },
        { name: 'SurfaceAreaCalculators', color: 'bg-purple-200' },
        { name: 'VolumeCalculators', color: 'bg-sky-200' },
    ];

    const conceptToCategories = {
        'Basic Math': ['AllCalculators'],
        'Algebra': ['AllCalculators', 'DistanceCalculators', 'PercentageCalculators'],
        'Geometry': ['AllCalculators', 'AreaCalculators', 'PerimeterCalculators', 'SurfaceAreaCalculators', 'VolumeCalculators'],
    };

    const [selectedConcept, setSelectedConcept] = useState('Basic Math');
    const [filteredCategories, setFilteredCategories] = useState(allCategories); 
    const navigate = useNavigate();

    const handleConceptClick = (concept) => {
        setSelectedConcept(concept);
        const categoriesToDisplay = conceptToCategories[concept];
        setFilteredCategories(allCategories.filter(cat => categoriesToDisplay.includes(cat.name)));
    };

    const handleCategoryClick = (category) => {
        setSelectedConcept(category.name);
        onSelectCategory(category.name);
        navigate('/');
    };

    const formatCategoryName = (name) => {
        return name.replace(/([a-z])([A-Z])/g, '$1 $2');
    };

    return (
        <>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-16">
                {['Basic Math', 'Algebra', 'Geometry'].map((concept, index) => (
                    <div 
                        key={index} 
                        className={`group relative w-full md:h-[200px] p-4 border border-black text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${backgroundColors[index % backgroundColors.length]}`}
                    >
                        <Link to="/" onClick={() => handleConceptClick(concept)} className="w-full h-full flex flex-col items-start">
                            <h2 className="text-3xl font-bold tracking-tighter mb-3 group-hover:underline decoration-dotted decoration-2 underline-offset-4">
                                {concept}
                            </h2>
                            <p className="text-base font-mono opacity-80 group-hover:opacity-100">
                                {concept === 'Basic Math' && 'Learn foundational math concepts that are essential for further learning.'}
                                {concept === 'Algebra' && 'Explore algebraic concepts, including equations, slope, and distance calculations.'}
                                {concept === 'Geometry' && 'Dive into geometry concepts including volume, area, surface area, and perimeter calculations.'}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center w-full max-w-4xl mt-20">
                <div className="flex flex-col space-y-1 md:flex-row md:space-x-8">
                    {filteredCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => handleCategoryClick(category)}
                            className={`transition-all duration-200 text-xl tracking-tight font-bold ${selectedConcept === category.name ? `${category.color} py-2 px-4 rounded` : 'hover:scale-105'}`}
                        >
                            {formatCategoryName(category.name)}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Filter;
