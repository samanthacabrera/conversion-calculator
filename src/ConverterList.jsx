import React from 'react';
import Converter from './Converter';

const converterData = {
    'Common Converters': [
        { value: 'length', label: 'Length' },
        { value: 'temperature', label: 'Temperature' },
        { value: 'volume', label: 'Volume' },
        { value: 'weight', label: 'Weight' },
        { value: 'time', label: 'Time' },
    ],
    'Engineering Converters': [],
    'Financial Converters': [],
};

const ConverterList = ({ selectedCategory }) => {
    const convertersToShow = converterData[selectedCategory] || [];

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Mobile view */}
            <div className="flex flex-col mt-2 space-y-12 lg:hidden">
                {convertersToShow.map((converter) => (
                    <div key={converter.value} className="w-full">
                        <Converter conversionType={converter.value} />
                    </div>
                ))}
            </div>
            {/* Desktop view */}
            <div className="hidden overflow-hidden lg:flex lg:justify-start lg:items-center lg:w-full lg:p-12 lg:mt-6 lg:overflow-x-scroll lg:scroll-smooth space-x-24">
                {convertersToShow.map((converter) => (
                    <div key={converter.value} className="w-full transition duration-300 hover:scale-110 hover:shadow-lg rounded-md">
                    <Converter conversionType={converter.value} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConverterList;
