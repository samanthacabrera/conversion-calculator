import React, {useState}  from 'react';
import { calcData } from './data';
import { calculatorRoutes } from './routes'; 
import ConversionCalc from './ConversionCalc'; 
import VolumeCalc from './VolumeCalc'; 
import AreaCalc from './AreaCalc';

const Page = ({ calcType }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const route = calculatorRoutes.find(route => route.calcType === calcType);

    const renderCalculator = () => {
        if (route) {
            switch (route.component) {
                case 'ConversionCalc':
                    return <ConversionCalc calcType={calcType} />; 
                case 'VolumeCalc':
                    return <VolumeCalc calcType={calcType} />;
                case 'AreaCalc':
                    return <AreaCalc calcType={calcType} />;
                default:
                    return <p>Calculator component not found.</p>;
            }
        } else {
            return <p>Calculator type not found.</p>;
        }
    };

    const title = route && route.component === 'VolumeCalc' 
    ? `Volume of a ${calcType.replace('Volume', '').charAt(0).toUpperCase() + calcType.replace('Volume', '').slice(1)}`
    : route && route.component === 'AreaCalc' 
    ? `Area of a ${calcType.replace('Area', '').charAt(0).toUpperCase() + calcType.replace('Area', '').slice(1)}`
    : `Converting ${calcType.charAt(0).toUpperCase() + calcType.slice(1)}`;


    const formula = calcData[calcType]?.formula;
    const steps = calcData[calcType]?.steps;
    const intro = calcData[calcType]?.desc;
    const chart = calcData[calcType]?.chart;

     const copyToClipboard = () => {
        navigator.clipboard.writeText(formula).then(() => {
            setCopySuccess('copied to clipboard :)');
            setTimeout(() => setCopySuccess(''), 2000); 
        }).catch(err => {
            setCopySuccess('Failed to copy formula');
        });
    };

    return (
        <div className="flex flex-col items-center md:flex-row p-2 md:p-12">
            <div className="order-2 md:order-1 md:w-1/2 m-12 space-y-8">
                <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>

                {intro && (
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Introduction</h3>
                    <p>{intro}</p>
                </section>
                )}

                {formula && (
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Formula</h3>
                        <div className="flex items-center space-x-4">
                            <p className="text-lg tracking-wider bg-gray-200 py-4 px-6 w-fit rounded">{formula}</p>
                            <button 
                                className="text-gray-400 hover:text-gray-800 hover:scale-105 transition-all duration-200"
                                onClick={copyToClipboard}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 4H5a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" />
                                </svg>

                            </button>
                            {copySuccess && <p className="text-gray-400">{copySuccess}</p>}
                        </div>
                </section>
                )}
                
                {steps && (
                <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Step-By-Step</h3>
                    <ol className="list-decimal list-inside space-y-8">
                        {steps.map((step, index) => (
                            <li key={index} >{step}</li>
                        ))}
                    </ol>
                </section>
                )}

                {chart && (
                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold">Conversion Chart</h3>
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    {chart[0].map((header, index) => (
                                        <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {chart.slice(1).map((row, rowIndex) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}
            </div>
        
            <div className="flex justify-center order-1 md:order-2 md:w-1/2 md:self-start m-12">
                {renderCalculator()}
            </div>
        </div>
    );
};

export default Page;
