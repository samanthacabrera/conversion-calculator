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
            setCopySuccess('Formula copied to clipboard!');
            setTimeout(() => setCopySuccess(''), 2000);
        }).catch(() => {
            setCopySuccess('Failed to copy formula');
        });
    };

    return (
        <div className="flex max-w-6xl mx-auto">
            {/* Sidebar Navigation */}
            <aside className="w-1/4 p-6 bg-gray-100 rounded-l-xl sticky top-0 h-screen">
                <h2 className="text-2xl font-semibold mb-6 text-blue-700">Sections</h2>
                <nav className="space-y-4">
                    <a href="#introduction" className="block text-lg hover:text-blue-700">Introduction</a>
                    <a href="#calculator" className="block text-lg hover:text-blue-700">Calculator</a>
                    <a href="#formula" className="block text-lg hover:text-blue-700">Formula</a>
                    <a href="#steps" className="block text-lg hover:text-blue-700">Step-by-Step Guide</a>
                    <a href="#definitions" className="block text-lg hover:text-blue-700">Definitions</a>
                    <a href="#example" className="block text-lg hover:text-blue-700">Example Problem</a>
                    <a href="#related" className="block text-lg hover:text-blue-700">Related Calculators</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-white rounded-r-xl shadow-lg space-y-12">
                {/* Title */}
                <section id="introduction">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">{title}</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
                </section>

                {/* Calculator Component */}
                <section id="calculator" className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Interactive Calculator</h2>
                    <Calculator calcType={calcType} />
                </section>

                {/* Formula */}
                {formula && (
                    <section id="formula">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Formula</h2>
                        <div className="flex items-center space-x-4">
                            <p className="text-lg bg-gray-100 py-2 px-4 rounded-lg font-mono">{formula}</p>
                            <button 
                                onClick={copyToClipboard}
                                className="text-blue-600 hover:text-blue-800 transition duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 4H5a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                            {copySuccess && <p className="text-green-500">{copySuccess}</p>}
                        </div>
                    </section>
                )}

                {/* Step-by-Step Guide */}
                {steps && (
                    <section id="steps">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Step-by-Step Guide</h2>
                        <ol className="list-decimal list-inside space-y-4">
                            {steps.map((step, index) => (
                                <li key={index} className="text-lg text-gray-700">{step}</li>
                            ))}
                        </ol>
                    </section>
                )}

                {/* Definitions */}
                {dimensions && dimensions.length > 0 && (
                    <section id="definitions">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Definitions</h2>
                        <div className="space-y-4">
                            {dimensions.map((dimension, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <span className="font-semibold text-gray-800">{dimension.name}:</span>
                                    <p className="text-gray-700">{dimension.definition}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Example Problem */}
                {wordProblem && (
                    <section id="example">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Example Problem</h2>
                        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded-lg">{wordProblem}</p>
                    </section>
                )}

                {/* Related Calculators */}
                <section id="related">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Related Calculators</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relatedCalculators.map((calc, index) => (
                            <li key={index} className="bg-blue-50 p-4 rounded-lg text-blue-700 hover:bg-blue-100 transition duration-200">
                                <a href={calc.path} className="block text-lg font-medium">{calc.label}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Page;
