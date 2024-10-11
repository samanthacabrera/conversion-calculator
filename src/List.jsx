import React from 'react';
import ConversionCalc from './ConversionCalc';
import VolumeCalc from './VolumeCalc';
import AreaCalc from './AreaCalc';

const converterData = {
    'All Calculators': [],
    'Conversion Calculators': [
        { value: 'length', label: 'Length' },
        { value: 'temperature', label: 'Temperature' },
        { value: 'volume', label: 'Volume' },
        { value: 'weight', label: 'Weight' },
        { value: 'time', label: 'Time' },
    ],
    'Volume Calculators': [
        { value: 'sphereVolume', label: 'Volume of a Sphere' }, 
        { value: 'coneVolume', label: 'Volume of a Cone' },
        { value: 'cubeVolume', label: 'Volume of a Cube' },
        { value: 'cylinderVolume', label: 'Volume of a Cylinder' },
        { value: 'rectangleVolume', label: 'Volume of a Rectangle' },
    ],
     'Area Calculators': [ 
        { value: 'rectangleArea', label: 'Area of a Rectangle' },
        { value: 'triangleArea', label: 'Area of a Triangle' },
        { value: 'trapezoidArea', label: 'Area of a Trapezoid' },
        { value: 'circleArea', label: 'Area of a Circle' },
        { value: 'sectorArea', label: 'Area of a Sector' },
    ],
};

converterData['All Calculators'] = [
    ...converterData['Area Calculators'],
    ...converterData['Conversion Calculators'],
    ...converterData['Volume Calculators'],
];

const componentMapping = {
    'length': ConversionCalc,
    'temperature': ConversionCalc,
    'volume': ConversionCalc,
    'weight': ConversionCalc,
    'time': ConversionCalc,
    'sphereVolume': VolumeCalc,
    'coneVolume': VolumeCalc,
    'cubeVolume': VolumeCalc,
    'cylinderVolume': VolumeCalc,
    'rectangleVolume': VolumeCalc,
    'rectangleArea': AreaCalc, 
    'triangleArea': AreaCalc,
    'trapezoidArea': AreaCalc,
    'circleArea': AreaCalc,
    'sectorArea': AreaCalc,
};

const List = ({ selectedCategory }) => {
    const itemsToShow = converterData[selectedCategory] || [];

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Mobile view */}
            <div className="flex flex-col items-center mt-2 space-y-12 lg:hidden">
                 {itemsToShow.map((item) => {
                    const Component = componentMapping[item.value];
                    return (
                        <div key={item.value} className="w-full border-2 border-white rounded-md">
                            <Component calcType={item.value} />
                        </div>
                    );
                })}
            </div>
            {/* Desktop view */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:p-12 lg:mt-6">
                {itemsToShow.map((item) => {
                    const Component = componentMapping[item.value];
                    return (
                        <div key={item.value} className="w-full border-2 border-white rounded-md">
                            <Component calcType={item.value}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;
