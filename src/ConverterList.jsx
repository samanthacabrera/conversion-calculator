import React from 'react';
import Converter from './Converter';

const converterTypes = [
  { value: 'length', label: 'Length' },
  { value: 'temperature', label: 'Temperature' },
  { value: 'volume', label: 'Volume' },
  { value: 'weight', label: 'Weight' },
   { value: 'time', label: 'Time' },
];

const ConverterList = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Mobile view */}
      <div className="flex flex-col space-y-12 lg:hidden">
        {converterTypes.map((converter) => (
          <div key={converter.value} className="w-full">
            <Converter conversionType={converter.value} />
          </div>
        ))}
      </div>
       {/* Desktop view */}
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full lg:py-24 lg:overflow-x-scroll lg:scroll-smooth space-x-24">
        {converterTypes.map((converter) => (
          <div key={converter.value} className="w-full transition duration-300 hover:scale-110 hover:shadow-lg rounded-md">
            <Converter conversionType={converter.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConverterList;
