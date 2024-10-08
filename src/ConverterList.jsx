import React from 'react';
import Converter from './Converter';

const converterData = {
    'All Calculators': [],
    'Common Calculators': [],
    'All Converters': [],
    'Common Converters': [
        { value: 'length', label: 'Length' },
        { value: 'temperature', label: 'Temperature' },
        { value: 'volume', label: 'Volume' },
        { value: 'weight', label: 'Weight' },
        { value: 'time', label: 'Time' },
    ],
};

converterData['All Calculators'] = [
    ...converterData['Common Calculators'],
];

converterData['All Converters'] = [
    ...converterData['Common Converters'],
];

const ConverterList = ({ selectedCategory }) => {
    const itemsToShow = converterData[selectedCategory] || [];

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Mobile view */}
            <div className="flex flex-col mt-2 space-y-12 lg:hidden">
                {itemsToShow.map((item) => (
                    <div key={item.value} className="w-full">
                        <Converter converterType={item.value} />
                    </div>
                ))}
            </div>
            {/* Desktop view */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:p-12 lg:mt-6 lg:rounded lg:bg-sky-100 lg:border-8 lg:border-blue-200 lg:shadow-sm">
                {itemsToShow.map((item) => (
                    <div key={item.value} className="w-full border-2 border-white transition duration-300 hover:scale-110 hover:shadow-lg rounded-md">
                        <Converter converterType={item.value} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConverterList;
