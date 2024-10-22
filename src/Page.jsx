import React, { useState } from 'react';
import { calcData } from './data';
import { calculatorRoutes } from './routes'; 
import Calculator from './Calculator'; 
import Glossary from './Glossary';

const Page = ({ calcType }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const route = calculatorRoutes.find(route => route.calcType === calcType);
    const category = Object.keys(calcData).find(cat => calcData[cat][route?.calcType]);
    const title = calcData[category][route?.calcType]?.label; 
    const intro = calcData[category][route?.calcType]?.desc; 
    const formula = calcData[category][route?.calcType]?.formula; 
    const steps = calcData[category][route?.calcType]?.steps;
    const relatedCalculators = Object.entries(calcData[category]).map(([key, value]) => ({
        calcType: key,
        label: value.label,
        path: calculatorRoutes.find(route => route.calcType === key)?.path || '#',
    }));

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formula).then(() => {
            setCopySuccess('copied to clipboard :)');
            setTimeout(() => setCopySuccess(''), 2000); 
        }).catch(err => {
            setCopySuccess('Failed to copy formula');
        });
    };

    return (
        <div className="flex flex-col p-6 md:p-12">
            <div className="flex flex-col items-center md:flex-row">
                <div className="order-2 md:order-1 md:w-2/3 m-12 space-y-8 bg-white rounded p-8 md:py-12 md:pr-12">
                    <h2 className="text-3xl md:text-4xl tracking-wide">{title}</h2>

                    {intro && (
                    <section className="space-y-4">
                        <h3 className="text-xl tracking-wide">Introduction</h3>
                        <p>{intro}</p>
                    </section>
                    )}

                    {formula && (
                    <section className="space-y-4">
                        <h3 className="text-xl tracking-wide">Formula</h3>
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
                        <h3 className="text-xl tracking-wide">Step-By-Step</h3>
                        <ol className="list-decimal list-inside space-y-8">
                            {steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </section>
                    )}
                </div>
            
                <div className="flex justify-center order-1 md:order-2 md:w-1/2 md:self-start m-12">
                    <Calculator calcType={calcType} /> 
                </div>
            </div>
            
            <div className="self-start mx-12 w-full">
                <h3 className="text-2xl tracking-wide mb-4">Related Calculators</h3>
                <ul className="flex flex-col gap-2">
                    {relatedCalculators.map(({ calcType, label, path }) => (
                        <li key={calcType}>
                            <a 
                                href={path} 
                                className="text-blue-500 hover:underline"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <Glossary /> 
        </div>
    );
};

export default Page;
