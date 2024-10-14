import React from 'react';
import { calcData } from './dataa';
import ConversionCalc from './ConversionCalc';
import AreaCalc from './AreaCalc';
import VolumeCalc from './VolumeCalc';

const List = ({ selectedCategory }) => {
    const filteredCalcs = calcData[selectedCategory] ? Object.values(calcData[selectedCategory]) : [];

    const componentMapping = {
        convertLength: ConversionCalc,
        convertVolume: ConversionCalc,
        convertWeight: ConversionCalc,
        convertTemperature: ConversionCalc,
        convertTime: ConversionCalc,
        areaRectangle: AreaCalc,
        areaTriangle: AreaCalc,
        areaTrapezoid: AreaCalc,
        areaCircle: AreaCalc,
        areaSector: AreaCalc,
        volumeSphere: VolumeCalc,
        volumeCone: VolumeCalc,
        volumeCube: VolumeCalc,
        volumeCylinder: VolumeCalc,
        volumeRectangle: VolumeCalc,
    }

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Mobile view */}
            <div className="flex flex-col items-center mt-2 space-y-12 lg:hidden">
                 {filteredCalcs.map((calc) => {
                   const Component = componentMapping[calc.calcType];
                    return (
                        <div key={calc.calcType} className="w-full border-2 border-white rounded-md">
                            <Component calcType={calc.calcType} />
                        </div>
                    );
                })}
            </div>
            {/* Desktop view */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:p-12 lg:mt-6">
                {filteredCalcs.map((calc) => {
                   const Component = componentMapping[calc.calcType];
                    return (
                        <div key={calc.calcType} className="w-full border-2 border-white rounded-md">
                            <Component calcType={calc.calcType} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;
