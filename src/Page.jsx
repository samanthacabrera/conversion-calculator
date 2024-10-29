import React, { useState } from 'react';
import { calcData } from './data';
import { calculatorRoutes } from './routes';
import Calculator from './Calculator';

const Page = ({ calcType }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const route = calculatorRoutes.find(route => route.calcType === calcType);
    const category = Object.keys(calcData).find(cat => calcData[cat][route?.calcType]);
    const currentCalc = calcData[category][route?.calcType];

    const title = currentCalc?.label;
    const intro = currentCalc?.desc;
    const formula = currentCalc?.formula;
    const steps = currentCalc?.steps;
    const dimensions = currentCalc?.dimensions;
    const wordProblem = currentCalc?.wordProblem;

    const relatedCalculators = Object.entries(calcData[category]).map(([key, value]) => ({
        calcType: key,
        label: value.label,
        path: calculatorRoutes.find(route => route.calcType === key)?.path || '#',
    }));

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formula).then(() => {
            setCopySuccess('copied to clipboard :)');
            setTimeout(() => setCopySuccess(''), 2000);
        }).catch(() => {
            setCopySuccess('Failed to copy formula');
        });
    };

    return (
        <div className="flex flex-col max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          
            <nav className="p-8">
                <h2 className="text-xl font-semibold">Contents</h2>
                <div className="flex flex-col space-y-1 mt-2">
                    {["Introduction", "Calculator", "Formula", "Steps", "Definitions", "Problems"].map((item, index) => (
                        <a key={index} href={`#${item.toLowerCase().replace(" ", "")}`} className="text-gray-600 hover:text-lime-400 transition duration-200">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="mt-6 space-y-12">
                {/* Title */}
                <section id="introduction" className="p-8">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
                </section>

                {/* Calculator Component */}
                <section id="calculator" className="p-8">
                    <Calculator calcType={calcType} />
                </section>

                {/* Formula */}
                {formula && (
                    <section id="formula" className="p-8 border-4 border-lime-200 rounded">
                        <h2 className="text-4xl font-semibold text-lime-200 mb-4 underline">Formula</h2>
                        <div className="flex flex-row items-center md:space-x-4">
                            <p className="text-lg bg-gray-100 py-4 px-12 rounded-lg font-mono w-auto">{formula}</p>
    
                            <button 
                                onClick={copyToClipboard}
                                className="text-gray-300 rounded-lg px-3 py-2 hover:text-gray-400 transition duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-10 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 4H5a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" />
                                </svg>
                            </button>

                            {copySuccess && <p className="text-gray-400">{copySuccess}</p>}
                     
                        </div>
                    </section>
                )}

                {/* Step-by-Step Guide */}
                {steps && (
                    <section id="steps" className="p-8 border-4 border-sky-200 rounded">
                        <h2 className="text-4xl font-semibold text-sky-200 mb-4 underline">Step-by-Step Guide</h2>
                        <ol className="list-decimal list-inside space-y-4">
                            {steps.map((step, index) => (
                                <li key={index} className="text-lg text-gray-700">{step}</li>
                            ))}
                        </ol>
                    </section>
                )}

                {/* Definitions */}
                {dimensions && dimensions.length > 0 && (
                    <section id="definitions" className="p-8 border-4 border-orange-200 rounded">
                        <h2 className="text-4xl font-semibold text-orange-200 mb-4 underline">Definitions</h2>
                        <div className="space-y-4">
                            {dimensions.map((dimension, index) => (
                                <div key={index} className="p-2">
                                    <p>{dimension.name}: {dimension.definition}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Example Problem */}
                {wordProblem && (
                    <section id="problems" className="p-8 border-4 border-pink-200 rounded">
                        <h2 className="text-4xl font-semibold text-pink-200 mb-4 underline">Problems</h2>
                        <p className="text-lg text-gray-700">{wordProblem}</p>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Page;
