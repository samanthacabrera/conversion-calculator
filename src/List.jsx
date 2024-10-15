import React from 'react';
import { calcData } from './data';
import Calculator from './Calculator'; 

const List = ({ selectedCategory }) => {
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
            <div className="flex flex-col items-center mt-2 space-y-12 lg:hidden">
                {filteredCalcs.length > 0 ? filteredCalcs.map((calc, index) => (
                    <div key={calc.calcType + index} className="w-full border-2 border-white rounded-md">
                        <Calculator calcType={calc.calcType} />
                    </div>
                )) : (
                    <p>No calculators available for this category.</p>
                )}
            </div>
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:p-12 lg:mt-6">
                {filteredCalcs.length > 0 ? filteredCalcs.map((calc, index) => (
                    <div key={calc.calcType} className="w-full border-2 border-white rounded-md">
                        <Calculator calcType={calc.calcType} />
                    </div>
                )) : (
                    <p className="col-span-3 text-center">No calculators available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default List;
