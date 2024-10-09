import React from 'react';
import Converter from './Converter';
import VolumeCalculator from './VolumeCalculator';

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
};

converterData['All Calculators'] = [
    ...converterData['Conversion Calculators'],
    ...converterData['Volume Calculators'],
];

const componentMapping = {
    'length': Converter,
    'temperature': Converter,
    'volume': Converter,
    'weight': Converter,
    'time': Converter,
    'sphereVolume': VolumeCalculator,
    'coneVolume': VolumeCalculator,
    'cubeVolume': VolumeCalculator,
    'cylinderVolume': VolumeCalculator,
    'rectangleVolume': VolumeCalculator,
};

const List = ({ selectedCategory }) => {
    const itemsToShow = converterData[selectedCategory] || [];

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Mobile view */}
            <div className="flex flex-col mt-2 space-y-12 lg:hidden">
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
