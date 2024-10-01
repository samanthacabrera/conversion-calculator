import React, { useState } from 'react';
import { conversionData } from './conversionData';

const Converter = () => {
    const [inputValue, setInputValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('meters');
    const [unitTo, setUnitTo] = useState('kilometers');
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        const parsedValue = parseFloat(inputValue);
        
        if (isNaN(parsedValue) || parsedValue < 0) {
            alert('Please enter a valid positive number.')
            return;
        }

        let convertedValue = parsedValue * (conversionData.length.conversions[unitTo] / conversionData.length.conversions[unitFrom]);
        setResult(convertedValue);
    };

    const displayResult = () => {
        if (result === null) {
            return null;
        } else if (typeof result === 'string') {
            return result; 
        } else {
            return result % 1 !== 0 ? result.toFixed(4) : Math.round(result);
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-blue-100 space-y-6">
            <h2 className="text-2xl tracking-wide">{conversionData.length.title}</h2>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                        placeholder="1"
                        min="0"
                    />
                    <select
                        value={unitFrom}
                        onChange={(e) => {
                            setUnitFrom(e.target.value);
                            setResult(null);
                        }}
                        className="p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(conversionData.length.conversions).map((unit) => (
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
                            {displayResult()}
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
                        {Object.keys(conversionData.length.conversions).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button
                onClick={handleConvert}
                className="hover:underline"
            >
                Convert 
            </button>
        </div>
    );
};

export default Converter;
