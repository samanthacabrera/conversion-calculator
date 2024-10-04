import React, { useState } from 'react';
import LengthConverter from './LengthConverter'; 
import TemperatureConverter from './TempConverter'; 
import VolumeConverter from './VolumeConverter'; 

const converters = {
  LengthConverter,
  TemperatureConverter,
  VolumeConverter,
};

const ConverterCircle = () => {
  const [activeConverter, setActiveConverter] = useState(null);

  const converterPositions = [
    { converter: 'LengthConverter' }, 
    { converter: 'TemperatureConverter' }, 
    { converter: 'VolumeConverter' }, 
  ];

  const handleConverterClick = (converter) => {
    setActiveConverter(converter);
  };

  const handleOverlayClick = () => {
    setActiveConverter(null); 
  };

  const ActiveConverterComponent = activeConverter ? converters[activeConverter] : null;

  return (
    <div className="relative w-full flex justify-center items-center min-h-[300px] lg:h-[500px] py-4">
      {activeConverter && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-10" onClick={handleOverlayClick} />
      )}
      <div className="flex flex-col lg:hidden space-y-4">
        {converterPositions.map((pos, index) => (
          <div key={index} onClick={() => handleConverterClick(pos.converter)}>
            {React.createElement(converters[pos.converter])}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-full lg:h-full lg:space-x-4 lg:mt-24">
        {converterPositions.map((position, index) => (
          <div
            key={index}
            className="hover:scale-110 transition-transform duration-300"
            onClick={() => handleConverterClick(position.converter)}
          >
            {React.createElement(converters[position.converter])}
          </div>
        ))}
      </div>
      {ActiveConverterComponent && (
        <div 
          className="fixed inset-0 flex justify-center items-center z-20" 
          onClick={handleOverlayClick}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
          >
            <ActiveConverterComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConverterCircle;
