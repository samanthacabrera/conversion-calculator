import React, { useState } from 'react';
import { conversionData } from './conversionData';

const Converter = () => {
    const [inputValue, setInputValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('meters');
    const [unitTo, setUnitTo] = useState('kilometers');
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        
        const parsedValue = parseFloat(inputValue);
        if (isNaN(parsedValue)) {
            setResult('Please enter a valid number.');
            return;
        }

        let convertedValue;

        if (unitFrom === 'meters' && unitTo === 'kilometers') {
            convertedValue = parsedValue / 1000; 
        } else if (unitFrom === 'kilometers' && unitTo === 'meters') {
            convertedValue = parsedValue * 1000; 
        } else {
            convertedValue = parsedValue; 
        }
        setResult(convertedValue);
    };

    return (
        <div className="flex flex-col items-center p-8 bg-blue-100 shadow-lg rounded-xl space-y-6">
            <h2 className="text-2xl">{conversionData.length.title}</h2>

            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                        placeholder="Value"
                    />
                    <select
                        value={unitFrom}
                        onChange={(e) => {
                            setUnitFrom(e.target.value);
                            setResult(null);
                        }}
                        className="p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {['meters', 'kilometers'].map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="text-xl text-gray-700">&darr;</p>
                <div className="flex items-center">
                    {result !== null && (
                        <h3 className="p-2 bg-white rounded-lg shadow-md">
                            {result % 1 !== 0 ? result.toFixed(4) : Math.round(result)}
                        </h3>
                    )}
                    <select
                        value={unitTo}
                        onChange={(e) => {
                            setUnitTo(e.target.value);
                            setResult(null); 
                        }}
                        className="flex-1 ml-2 p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {['meters', 'kilometers'].map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={handleConvert}
                className="hover:underline hover:-translate-y-1 transition duration-all-200"
            >
                Convert 
            </button>
        </div>
    );
};

export default Converter;
