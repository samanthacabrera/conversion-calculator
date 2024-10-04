import React, { useState, useRef, useEffect } from 'react';
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
  const converterRef = useRef(null); 

  const converterPositions = [
    { translateX: -150, translateY: -80, converter: 'LengthConverter' }, 
    { translateX: 0, translateY: -100, converter: 'TemperatureConverter' }, 
    { translateX: 150, translateY: -80, converter: 'VolumeConverter' }, 
  ];

  const handleConverterClick = (converter) => {
    setActiveConverter(converter);
  };

  const handleOverlayClick = () => {
    setActiveConverter(null);
  };

  const handleClickOutside = (event) => {
    if (converterRef.current && !converterRef.current.contains(event.target)) {
      setActiveConverter(null); 
    }
  };

  const ActiveConverterComponent = activeConverter ? converters[activeConverter] : null;

 
  useEffect(() => {
    if (activeConverter) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeConverter]);

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


      <div className="hidden lg:flex lg:justify-center lg:items-center lg:relative lg:w-full lg:h-full lg:mt-24">
        {converterPositions.map((position, index) => (
          <div
            key={index}
            className={`absolute transform translate-x-[${position.translateX}px] translate-y-[${position.translateY}px] hover:scale-110 transition-transform duration-300`}
            onClick={() => handleConverterClick(position.converter)}
          >
            {React.createElement(converters[position.converter])} 
          </div>
        ))}
      </div>

      {ActiveConverterComponent && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <div ref={converterRef} >
            <ActiveConverterComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConverterCircle;
