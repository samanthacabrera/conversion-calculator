import React from 'react';
import { calcData } from './data';
import { calculatorRoutes } from './routes'; 
import Converter from './Converter'; 
import VolumeCalculator from './VolumeCalculator'; 

const Page = ({ calcType }) => {
    const route = calculatorRoutes.find(route => route.calcType === calcType);

    const renderCalculator = () => {
        if (route) {
            switch (route.component) {
                case 'Converter':
                    return <Converter calcType={calcType} />; 
                case 'VolumeCalculator':
                    return <VolumeCalculator calcType={calcType} />;
                default:
                    return <p className="text-red-500">Calculator component not found.</p>;
            }
        } else {
            return <p className="text-red-500">Calculator type not found.</p>;
        }
    };

    const title = route && route.component === 'VolumeCalculator' 
        ? `volume of a ${calcType.replace('Volume', '').charAt(0) + calcType.replace('Volume', '').slice(1)}`
        : calcType;
    
    const formula = calcData[calcType]?.formula;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
            <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg m-2 p-6 lg:p-12 space-y-12">
                
                <h2 className="text-2xl lg:text-4xl tracking-wide mt-6">How do I calculate {title}?</h2>

                <div>{renderCalculator()}</div>
                
                <h3 className="text-xl tracking-wide font-semibold">Formula</h3>
                {formula && <p className="text-xl text-gray-600 mb-6">{formula}</p>} 
                
                
            </div>
        </div>
    );
};

export default Page;
