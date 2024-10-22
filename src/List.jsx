import React, { useState } from 'react';
import { calcData } from './data';
import Calculator from './Calculator'; 
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline'; 

const List = ({ selectedCategory }) => {
    const [isCondensed, setIsCondensed] = useState(false);

    const toggleView = () => {
        setIsCondensed(prevState => !prevState);
    };

    const getFilteredCalcs = (category) => {
        if (calcData[category]) {
            return Object.values(calcData[category]).map(calc => ({ ...calc }));
        } else {
            console.warn(`No data found for category: ${category}`);
            return [];
        }
    };

    const filteredCalcs = selectedCategory === 'AllCalculators'
        ? Object.values(calcData).flatMap(Object.values)
        : getFilteredCalcs(selectedCategory);

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="fixed top-4 left-4">
                 <button 
                onClick={toggleView} 
                className="transition duration-300 hover:scale-105 flex items-center">
                {isCondensed ? (
                    <Squares2X2Icon className="h-8 w-8" /> 
                ) : (
                    <ListBulletIcon className="h-8 w-8" /> 
                )}
            </button>
            </div>
    

            {/* mobile */}
            <div className={`flex flex-col items-center mt-2 space-y-4 lg:hidden`}>
                {filteredCalcs.length > 0 ? filteredCalcs.map((calc, index) => (
                    <div key={calc.calcType + index} className="w-full border-2 border-white rounded-md">
                        <Calculator calcType={calc.calcType} condensed={isCondensed} />
                    </div>
                )) : (
                    <p>No calculators available for this category.</p>
                )}
            </div>

            {/* desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:p-12 lg:mt-6">
                {filteredCalcs.length > 0 ? filteredCalcs.map((calc, index) => (
                    <div key={calc.calcType} className="w-full border-2 border-white rounded-md">
                        <Calculator calcType={calc.calcType} condensed={isCondensed} />
                    </div>
                )) : (
                    <p className="col-span-3 text-center">No calculators available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default List;
